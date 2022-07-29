import App from "next/app";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";
import { useRouter } from "next/router";
import { Provider, useSelector } from "react-redux";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    //Anything returned here can be accessed by the client
    return { pageProps };
  }

  render() {
    //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainApp Component={Component} pageProps={pageProps} />
        </PersistGate>
      </Provider>
    );
  }
}

const MainApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const { auth } = useSelector((state) => state);

  React.useEffect(() => {
    if (router.pathname !== "/register" && !auth?.token) {
      router.replace("/login");
    }

    // check if already have token
    if (router.pathname === "/login" && auth?.token) {
      router.replace("/");
    }

    if (router.pathname === "/register" && auth?.token) {
      router.replace("/");
    }
  });

  return <Component {...pageProps} />;
};
