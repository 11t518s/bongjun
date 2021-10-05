import * as express from "express";

const app: express.Express = express();
const port: number = 8000;

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({ hello: "test", age: 1, friend: ["ss", "ys"] });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});