import { Request, Response } from "express";

import { AppError } from "@/errors/app-error";
import { 
  DeleteCategoryUseCase 
} from "@/domain/category/application/use-cases/delete-category-use-case";
import { CategoryPrismaRepository } from 
  "@/domain/category/application/repositories/prisma/category-prisma-repository";

class DeleteCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getAllCategoriesUseCase = new DeleteCategoryUseCase(
      new CategoryPrismaRepository()
    );

    try {
      const { id } = request.params;
      const { id: userId } = request.user;

      const categories = await getAllCategoriesUseCase.execute({ userId, id });

      return response.status(200).json(categories);
    } catch (error: any) {
      throw new AppError(error.message, error.statusCode);
    }
  }
}

export default { controller: new DeleteCategoryController() };
