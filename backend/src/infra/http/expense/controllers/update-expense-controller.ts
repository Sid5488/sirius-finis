import { Request, Response } from "express";

import { AppError } from "@/errors/app-error";
import { UpdateExpenseUseCase } from 
  "@/domain/expense/application/use-cases/update-expense-use-case";
import { ExpensePrismaRepository } from 
  "@/domain/expense/application/repositories/prisma/expense-prisma-repository";

class UpdateExpenseController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const updateExpenseUseCase = new UpdateExpenseUseCase(
        new ExpensePrismaRepository()
      );

      const { id } = request.params;
      const { id: userId } = request.user;
      const { title, price, categoryId } = request.body;

      await updateExpenseUseCase.execute({ 
        id, 
        title, 
        price, 
        userId, 
        categoryId 
      });

      return response.status(200).json();
    } catch (error: any) {
      throw new AppError(error.message, error.statusCode);
    }
  }
}

export default { controller: new UpdateExpenseController() };
