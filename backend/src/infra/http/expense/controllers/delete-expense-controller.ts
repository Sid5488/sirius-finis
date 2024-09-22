import { Request, Response } from "express";

import { AppError } from "@/errors/app-error";
import { DeleteExpenseUseCase } from 
  "@/domain/expense/application/use-cases/delete-expense-use-case";
import { ExpensePrismaRepository } from 
  "@/domain/expense/application/repositories/prisma/expense-prisma-repository";

class DeleteExpenseController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const deleteExpenseUseCase = new DeleteExpenseUseCase(
        new ExpensePrismaRepository()
      );

      const { id } = request.params;
      const { id: userId } = request.user;

      await deleteExpenseUseCase.execute({ id, userId });

      return response.status(204).json();
    } catch (error: any) {
      throw new AppError(error.message, error.statusCode);
    }
  }
}

export default { controller: new DeleteExpenseController() };
