import { ICreateUserDTO } from "../dtos/user-dto";

export interface ICreateAccountUseCase {
  execute(input: ICreateUserDTO): Promise<void>
}
