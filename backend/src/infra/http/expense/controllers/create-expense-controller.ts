import { Request, Response } from "express";

import { AppError } from "@/errors/app-error";

import { ExpensePrismaRepository } from 
  "@/domain/expense/application/repositories/prisma/expense-prisma-repository";
import { CreateExpenseUseCase } from 
  "@/domain/expense/application/use-cases/create-expense-use-case";

class CreateExpenseController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const createExpenseUseCase = new CreateExpenseUseCase(
        new ExpensePrismaRepository()
      );

      const { title, price, categoryId } = request.body;
      const { id: userId } = request.user;

      await createExpenseUseCase.execute({ title, price, categoryId, userId });

      return response.status(201).json();
    } catch (error: any) {
      throw new AppError(error.message, error.statusCode);
    }
  }
}

export default { controller: new CreateExpenseController() }
