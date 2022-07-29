// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const { fullname } = req.body;
    const { page } = req.query;
    const todos = fetch("https://jsonplaceholder.typicode.com/todos").then(
      (result) => result.json()
    );

    const users = fetch("http://localhost:8000/users", {
      headers: new Headers({
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzAsIm5hbWUiOiJLdWJpbCIsImVtYWlsIjoia3ViaWxAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTUkdDNIMnQxN1B3WGphNGtnUnFYdGdNdWdzcXo0NUl3elBZUTh2QnhPc0VCZTQ5UzdYeDJiMlMiLCJwaG90byI6bnVsbCwiaWF0IjoxNjU4ODI2MDM0LCJleHAiOjE2NTg5MTI0MzR9.x3MZjLWxcG0klwgyJ4jTIQpLmiz5E-qmUnXUifW0mtQ",
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    }).then((result) => result.json());

    Promise.all([todos, users])
      .then((result) => {
        res.status(200).json({
          page,
          keyword: fullname,
          todos: result[0],
          users: result[1].data,
        });
      })
      .catch((error) => {
        res.status(400).json("Data not found");
      });
  } catch (error) {
    console.log(error);
    res.status(400).json("Something error");
  }
}
