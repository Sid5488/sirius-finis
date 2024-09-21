import { compare } from "bcrypt";
import jwt from 'jsonwebtoken';

import { AppError } from "@/errors/app-error";
import authConfig from "@/core/config/auth-config";
import { IAuthUseCase } from "../interfaces/i-auth-use-case";
import { IAuthDTO, IAuthResponseDTO } from "../dtos/auth-dto";
import { IUserRepository } from 
  "@/domain/users/application/repositories/user-repository";

class AuthUseCase implements IAuthUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute({ email, password }: IAuthDTO): Promise<IAuthResponseDTO> {
    const { sign } = jwt;

    const userExist = await this.userRepository.findByEmail(email);

    if (!userExist) throw new AppError("Email/password are incorrect.", 406);

    if (await compare(userExist.password!, password))
      throw new AppError("Email/password are incorrect.", 406);

    const { secret, expiresIn } = authConfig;
    const token = sign({
      subject: userExist.id,
      email: userExist.email
    }, secret, { expiresIn });

    delete userExist.password;

    return {
      user: userExist,
      token
    };
  }
}

export { AuthUseCase };
