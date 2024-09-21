import { Router } from "express";

import { 
  createCategorySchema 
} from "../categories/validations/create-category-schema";

import createCategoryController from 
  "../categories/controllers/create-category-controller";
import getAllCategoriesController from 
  "../categories/controllers/get-all-categories-controller";

class CategoryRoutes {
  public router: Router;

  constructor() {
    this.router = Router();

    this.routes();
  }

  public routes(): void {
    this.router.post(
      "/", 
      createCategorySchema, 
      createCategoryController.controller.handle
    );

    this.router.get(
      "/",
      getAllCategoriesController.controller.handle
    )
  }
}

export default { routes: new CategoryRoutes().router };
