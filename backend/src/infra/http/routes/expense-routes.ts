import { Router } from "express";

import { 
  createExpenseSchema 
} from "../expense/validations/create-expense-schema";
import createExpenseController from 
  "../expense/controllers/create-expense-controller";

class CategoryRoutes {
  public router: Router;

  constructor() {
    this.router = Router();

    this.routes();
  }

  public routes(): void {
    this.router.post(
      "/", 
      createExpenseSchema, 
      createExpenseController.controller.handle
    );
  }
}

export default { routes: new CategoryRoutes().router };
