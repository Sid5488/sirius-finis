import { Request, Response } from "express";

import { AppError } from "@/errors/app-error";
import { CreateAccountUseCase } from 
  "@/domain/users/application/use-cases/create-account";
import { UserPrismaRepository } from 
  "@/domain/users/application/repositories/prisma/user-prisma-repository";

const createAccountUseCase = new CreateAccountUseCase(
  new UserPrismaRepository()
);

class CreateAccountController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body;

      await createAccountUseCase.execute({ name, email, password });

      return response.status(201).json();
    } catch (error: any) {
      throw new AppError(error.message, error.statusCode);
    }
  }
}

export default { controller: new CreateAccountController() };
