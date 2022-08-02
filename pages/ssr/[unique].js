import React from "react";

// client
function Ssr(props) {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      // Client-side-only code
      console.log(window.innerWidth);
      console.log(window.innerHeight);
    }
  });

  return (
    <h1>
      {props?.todo?.title}
      <p onClick={() => (window.location.href = "/login")}>click me</p>
    </h1>
  );
}

// server
export async function getServerSideProps(context) {
  const { unique } = context.params;
  const request = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${unique}`
  ).then((response) => response.json());

  const isPageExsisted = Object.keys(request).length;

  if (!isPageExsisted) {
    return {
      notFound: true,
    };
    /// stooppp/...
  }

  return {
    props: {
      todo: request,
      profile: {
        fullname: "bilkis",
      },
    }, // will be passed to the page component as props
  };
}

export default Ssr;
