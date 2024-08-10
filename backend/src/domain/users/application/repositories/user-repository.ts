import { 
  ICreateUserDTO, 
  ISaveUserDTO, 
  IUserResponseDTO 
} from "../dtos/user-dto";

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<void>;

  save(data: ISaveUserDTO): Promise<void>;

  delete(id: string): Promise<void>;

  findById(id: string): Promise<IUserResponseDTO | null>;

  findByEmail(email: string): Promise<IUserResponseDTO | null>;
}

export { IUserRepository };
