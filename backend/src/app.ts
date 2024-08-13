import cors from "cors";
import { errors } from "celebrate";
import express, { Application } from "express";

import { env } from "./env";
import routes from "./infra/http/routes";

class App {
  public server: Application;

  constructor() {
    this.server = express();

    this.showEnvironment();

    this.middleware();
    this.router();
  }

  public showEnvironment(): void {
    console.info("NODE_ENV:", env.NODE_ENV);
  }

  private middleware(): void {
    this.server.use(express.json());
    this.server.use(cors());
  }

  private router(): void {
    this.server.use("/api", routes.router);

    this.server.use(errors());
  }
}

export default { server: new App().server };
