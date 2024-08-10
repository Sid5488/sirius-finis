import { ICreateUserDTO } from "../dtos/user-dto";
import { checkUserExist } from "@/helpers/users/check-user-exist";
import { IUserRepository } from "../repositories/user-repository";
import { ICreateAccountUseCase } from "../interfaces/i-create-account-use-case";

class CreateAccountUseCase implements ICreateAccountUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(input: ICreateUserDTO): Promise<void> {
    const user = await checkUserExist(input, this.repository);

    await this.repository.create(user);
  }
}

export { CreateAccountUseCase };
