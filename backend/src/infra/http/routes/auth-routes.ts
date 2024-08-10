import { Router } from "express";

import authController from "../auth/controllers/auth-controller";
import { authSchema } from "../auth/validations/auth-schema-validation";

class AuthRoutes {
  public router: Router;

  constructor() {
    this.router = Router();

    this.routes();
  }

  public routes(): void {
    this.router
      .post("/sign-in", authSchema, authController.controller.authenticator);
  }
}

export default { routes: new AuthRoutes().router };
