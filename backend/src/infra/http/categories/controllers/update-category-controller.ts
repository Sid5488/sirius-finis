import { Request, Response } from "express";

import { AppError } from "@/errors/app-error";
import { CategoryPrismaRepository } from 
  "@/domain/category/application/repositories/prisma/category-prisma-repository";
import { UpdateCategoryUseCase } from "@/domain/category/application/use-cases/update-category-use-case";

class UpdateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getAllCategoriesUseCase = new UpdateCategoryUseCase(
      new CategoryPrismaRepository()
    );

    try {
      const { id } = request.params;
      const { name } = request.body;
      const { id: userId } = request.user;

      const categories = await getAllCategoriesUseCase.execute({
        id,
        name,
        userId
      });

      return response.status(200).json(categories);
    } catch (error: any) {
      throw new AppError(error.message, error.statusCode);
    }
  }
}

export default { controller: new UpdateCategoryController() };
