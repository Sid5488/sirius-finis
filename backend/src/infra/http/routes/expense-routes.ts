import { Router } from "express";

import { 
  createExpenseSchema 
} from "../expense/validations/create-expense-schema";
import { 
  updateExpenseSchema 
} from "../expense/validations/update-expense-schema";

import getAllExpenseController from 
  "../expense/controllers/get-all-expense-controller";
import getByIdExpenseController from 
  "../expense/controllers/get-by-id-expense-controller";
import createExpenseController from 
  "../expense/controllers/create-expense-controller";
import updateExpenseController from 
  "../expense/controllers/update-expense-controller";
import deleteExpenseController from 
  "../expense/controllers/delete-expense-controller";

class CategoryRoutes {
  public router: Router;

  constructor() {
    this.router = Router();

    this.routes();
  }

  public routes(): void {
    this.router.get(
      "/",  
      getAllExpenseController.controller.handle
    );

    this.router.get(
      "/:id",  
      getByIdExpenseController.controller.handle
    );
    
    this.router.post(
      "/", 
      createExpenseSchema, 
      createExpenseController.controller.handle
    );

    this.router.put(
      "/:id", 
      updateExpenseSchema, 
      updateExpenseController.controller.handle
    );

    this.router.delete(
      "/:id",  
      deleteExpenseController.controller.handle
    );
  }
}

export default { routes: new CategoryRoutes().router };
