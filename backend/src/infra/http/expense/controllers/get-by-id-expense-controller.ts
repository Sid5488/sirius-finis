import { Request, Response } from "express";

import { AppError } from "@/errors/app-error";
import { ExpensePrismaRepository } from 
  "@/domain/expense/application/repositories/prisma/expense-prisma-repository";
import { GetByIdxpenseUseCase } from 
  "@/domain/expense/application/use-cases/get-by-id-expense-use-case";

class GetByIdExpenseController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const getByIdxpenseUseCase = new GetByIdxpenseUseCase(
        new ExpensePrismaRepository()
      );

      const { id } = request.params;
      const { id: userId } = request.user;

      const expese = await getByIdxpenseUseCase.execute(id, userId);

      return response.status(200).json(expese);
    } catch (error: any) {
      throw new AppError(error.message, error.statusCode);
    }
  }
}

export default { controller: new GetByIdExpenseController() };
