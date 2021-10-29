import * as express from "express";
import catsRouter from "./cats/cats.router";

class Server {
  public app: express.Application;
  public port = 8000;

  constructor(app: express.Application = express()) {
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    // logging middleware
    this.app.use((req, res, next) => {
      next();
    });

    //json middleware
    this.app.use(express.json());

    this.setRoute();

    //  404 middleware
    this.app.use((req, res, next) => {
      res.send({ error: "404 not found error" });
    });
  }

  public listen() {
    this.setMiddleware;
    this.app.listen(this.port, () => {
      console.log(`server port is ${this.port}`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
