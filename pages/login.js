import React from "react";
import Image from "next/image";
import loginStyle from "../styles/pages/Login.module.css";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import * as Type from "../redux/auth/type";

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState({
    isError: false,
    errorMsg: "",
  });

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .post("/api/auth/login", { email, password })
        .then((respose) => {
          dispatch({
            type: Type.SET_AUTH,
            payload: {
              token: respose?.data?.token,
              user: respose?.data?.user,
            },
          });

          router.replace("/");
        })
        .catch(({ response }) => {
          const message = response?.data?.message;
          setError({ isError: true, errorMsg: message });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 1000);
  };

  return (
    <div className={loginStyle.root}>
      <Head>
        <title>Login</title>
      </Head>
      <div className="row">
        {/* Side Left */}
        <div className="col-md-6">
          <div className={loginStyle.loginLeft}>
            <div className={loginStyle.bgOverlay}></div>
            <div>
              <Image
                src="/images/cooking-logo.png"
                alt="logo"
                width="100px"
                height="110px"
              />
              <p>Mama Recipe.</p>
            </div>
          </div>
        </div>

        {/* Side Right */}
        <div className="col-md-6 col-xs-12">
          <div className={loginStyle.loginRight}>
            {/* Login Title */}
            <div>
              <h4 className="text-center">Welcome</h4>
              <p className="text-center">Log in into your exiting account</p>
            </div>

            {/* Error Alert */}
            {error?.isError && (
              <div className={loginStyle.alert}>
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Cannot Login</strong>
                  <br />
                  <span>
                    {error?.errorMsg ?? "Something wrong with our server"}
                  </span>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={() =>
                      setError({
                        isError: false,
                        errorMsg: "",
                      })
                    }
                  ></button>
                </div>
              </div>
            )}

            {/* Login Form */}
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                {/* Email Input */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    E-mail
                  </label>
                  <div className={loginStyle.formControl}>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      placeholder="Your Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <div className={loginStyle.formControl}>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="password"
                      placeholder="Your password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Checkbox */}
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    I agree to terms & conditions
                  </label>
                </div>

                {/* Submit Button */}
                <div className="d-grid ">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    // onClick={handleLogin}
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Log in"}
                  </button>
                </div>

                <div className={loginStyle.loginRightFooter}>
                  <p>
                    Don’t have an account ?{" "}
                    <Link href="/register" passHref>
                      <a>Sign Up</a>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
