import { Router } from "express";

import { createUserSchema } from "../users/validations/create-user-schema";
import createAccountController from 
  "../users/controllers/create-account-controller";

class UserRoutes {
  public router: Router;

  constructor() {
    this.router = Router();

    this.routes();
  }

  public routes(): void {
    this.router
      .post("/", createUserSchema, createAccountController.controller.handle);
  }
}

export default { routes: new UserRoutes().router };
