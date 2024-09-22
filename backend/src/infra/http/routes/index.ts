import { Router } from "express";

import authRoutes from "./auth-routes";
import userRoutes from "./user-routes";
import expenseRoutes from "./expense-routes";
import categoryRoutes from "./category-routes";
import authMiddleware from "@/middlewares/express/auth-middleware";

class Routes {
  public router: Router;

  constructor() {
    this.router = Router();

    this.routes();
  }

  routes(): void {
    this.router.use("/auth", authRoutes.routes);
    this.router.use("/users", userRoutes.routes);
    
    this.router.use(authMiddleware);
    this.router.use("/categories", categoryRoutes.routes);
    this.router.use("/expenses", expenseRoutes.routes);
  }
}

export default { router: new Routes().router };
