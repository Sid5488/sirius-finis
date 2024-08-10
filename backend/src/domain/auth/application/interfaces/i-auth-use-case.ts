import { IAuthDTO, IAuthResponseDTO } from "../dtos/auth-dto";

export interface IAuthUseCase {
  execute({ email, password }: IAuthDTO): Promise<IAuthResponseDTO>;
}
