import { Request, Response } from "express";

import { AppError } from "@/errors/app-error";
import { 
  CreateCategoryUseCase 
} from "@/domain/category/application/use-cases/create-category-use-case";
import { 
  CategoryPrismaRepository 
} from "@/domain/category/application/repositories/prisma/category-prisma-repository";

class CreateAccountController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createCategoryUseCase = new CreateCategoryUseCase(
      new CategoryPrismaRepository()
    );

    try {
      const { name } = request.body;
      const { id } = request.user;

      await createCategoryUseCase.execute({ name, userId: id });

      return response.status(201).json();
    } catch (error: any) {
      throw new AppError(error.message, error.statusCode);
    }
  }
}

export default { controller: new CreateAccountController() };
