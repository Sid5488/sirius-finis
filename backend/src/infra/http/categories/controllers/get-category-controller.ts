import { Request, Response } from "express";

import { AppError } from "@/errors/app-error";
import { GetCategoryByIdUseCase } from 
  "@/domain/category/application/use-cases/get-category-by-id-use-case";
import { CategoryPrismaRepository } from 
  "@/domain/category/application/repositories/prisma/category-prisma-repository";

class GetCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getAllCategoriesUseCase = new GetCategoryByIdUseCase(
      new CategoryPrismaRepository()
    );

    try {
      const { id } = request.params;
      const { id: userId } = request.user;

      const categories = await getAllCategoriesUseCase.execute({ id, userId });

      return response.status(200).json(categories);
    } catch (error: any) {
      throw new AppError(error.message, error.statusCode);
    }
  }
}

export default { controller: new GetCategoryController() };
