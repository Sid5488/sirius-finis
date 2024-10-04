import { Router } from "express";

import { 
  createCategorySchema 
} from "../categories/validations/create-category-schema";
import { 
  deleteCategorySchema 
} from "../categories/validations/delete-category-schema";
import { 
  updateCategorySchema 
} from "../categories/validations/update-category-schema";

import createCategoryController from 
  "../categories/controllers/create-category-controller";
import getAllCategoriesController from 
  "../categories/controllers/get-all-categories-controller";
import deleteCategoryController from 
  "../categories/controllers/delete-category-controller";
import getCategoryController from 
  "../categories/controllers/get-category-controller";
import updateCategoryController from 
  "../categories/controllers/update-category-controller";

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
    );

    this.router.get(
      "/:id",
      getCategoryController.controller.handle
    );

    this.router.put(
      "/:id",
      updateCategorySchema,
      updateCategoryController.controller.handle
    );

    this.router.delete(
      "/:id",
      deleteCategorySchema,
      deleteCategoryController.controller.handle
    );
  }
}

export default { routes: new CategoryRoutes().router };
