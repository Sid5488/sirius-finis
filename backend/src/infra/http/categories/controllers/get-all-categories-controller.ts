import { Request, Response } from "express";

import { AppError } from "@/errors/app-error";
import { GetAllCategoriesUseCase } from 
  "@/domain/category/application/use-cases/get-all-categories-use-case";
import { 
  CategoryPrismaRepository 
} from "@/domain/category/application/repositories/prisma/category-prisma-repository";

class GetAllCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getAllCategoriesUseCase = new GetAllCategoriesUseCase(
      new CategoryPrismaRepository()
    );

    try {
      const { id } = request.user;

      const categories = await getAllCategoriesUseCase.execute({ userId: id });

      return response.status(200).json(categories);
    } catch (error: any) {
      throw new AppError(error.message, error.statusCode);
    }
  }
}

export default { controller: new GetAllCategoriesController() };
