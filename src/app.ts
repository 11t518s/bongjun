import * as express from "express";
import catsRouter from "./cats/cats.router";

const app: express.Express = express();
const port: number = 8000;

// logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("middleware");
  next();
});

//json middleware
app.use(express.json());

app.use(catsRouter);

//  404 middleware
app.use((req, res, next) => {
  res.send({ error: "404 not found error" });
});

app.listen(port, () => {
  console.log(`server port is ${port}`);
});
