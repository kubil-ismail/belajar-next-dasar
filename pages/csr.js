import React from "react";

function Csr() {
  React.useEffect(() => {
    const request = fetch(
      `https://jsonplaceholder.typicode.com/todos/1`
    )
      .then((response) => response.json())
      .then((response) => console.log(response));
  });

  return <h1>Ini halaman csr</h1>;
}

export default Csr;
