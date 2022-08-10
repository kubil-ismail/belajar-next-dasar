import React from "react";

// posts will be populated at build time by getStaticProps()
function Blog(props) {
  return (
    <h1>
      {props?.todo?.title}
      <p onClick={() => (window.location.href = "/login")}>click me</p>
    </h1>
  );
}

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const request = await fetch(
    "https://jsonplaceholder.typicode.com/todos"
  ).then((response) => response.json());

  return {
    paths: request.map((item) => ({
      params: { id: item?.id?.toString() },
    })),
    fallback: false, // can also be true or 'blocking'
    // revalidate: 60 * 60, // In seconds
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const request = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  ).then((response) => response.json());

  return {
    props: {
      todo: request,
      profile: {
        fullname: "bilkis",
      },
    }, // will be passed to the page component as props
  };
}

export default Blog;
