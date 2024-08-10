import { hash } from "bcrypt";

import { AppError } from "@/errors/app-error";
import { ICreateUserDTO } from "@/domain/users/application/dtos/user-dto";
import { IUserRepository } from 
  "@/domain/users/application/repositories/user-repository";

const checkUserExist = async (
  input: ICreateUserDTO, 
  repository: IUserRepository
) => {
  const userExists = await repository.findByEmail(input.email);

  if (userExists) throw new AppError("Email already in use!", 409);

  const passwordHash = await hash(input.password, 10);

  const build = {
    ...input,
    password: passwordHash,
    email: input.email,
  };

  return build;
}

export { checkUserExist };
