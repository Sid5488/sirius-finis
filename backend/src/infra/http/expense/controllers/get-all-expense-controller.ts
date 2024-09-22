import { Request, Response } from "express";

import { AppError } from "@/errors/app-error";
import { ExpensePrismaRepository } from 
  "@/domain/expense/application/repositories/prisma/expense-prisma-repository";
import { GetAllExpenseUseCase } from 
  "@/domain/expense/application/use-cases/get-all-expense-use-case";

class GetAllExpenseController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const getAllExpenseUseCase = new GetAllExpenseUseCase(
        new ExpensePrismaRepository()
      );

      const { id: userId } = request.user;

      const expeses = await getAllExpenseUseCase.execute(userId);

      return response.status(200).json(expeses);
    } catch (error: any) {
      throw new AppError(error.message, error.statusCode);
    }
  }
}

export default { controller: new GetAllExpenseController() };
