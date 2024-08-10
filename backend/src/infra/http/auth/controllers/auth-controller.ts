import { Request, Response } from "express";

import { AppError } from "@/errors/app-error";
import { AuthUseCase } from "@/domain/auth/application/use-cases/auth-use-case";
import { UserPrismaRepository } from 
  "@/domain/users/application/repositories/prisma/user-prisma-repository";

const authUseCase = new AuthUseCase(new UserPrismaRepository());

class AuthController {
  public async authenticator(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { email, password } = request.body;

      const loggedIn = await authUseCase.execute({ email, password });

      return response.status(200).json(loggedIn);
    } catch (error: any) {
      throw new AppError(error.message, error.statusCode);
    }
  }
}

export default { controller: new AuthController() };
