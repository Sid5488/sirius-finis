import { 
  IUserRepository 
} from "@/domain/users/application/repositories/user-repository";

import { 
  ICreateUserDTO, 
  ISaveUserDTO, 
  IUserDTO, 
  IUserResponseDTO
} from "@/domain/users/application/dtos/user-dto";

class InMemoryUsersRepository implements IUserRepository {
  public items: IUserDTO[] = [];

  async create(user: ICreateUserDTO): Promise<void> {
    this.items.push(user as IUserDTO);
  }

  async save(user: ISaveUserDTO): Promise<void> {
    const itemIndex = this.items.findIndex(item => item.id === user.id);

    this.items[itemIndex] = user as IUserDTO;
  }

  async delete(id: string): Promise<void> {
    const itemIndex = this.items.findIndex(item => item.id === id);

    this.items.splice(itemIndex, 1);
  }

  async findById(id: string): Promise<IUserResponseDTO | null> {
    const user = this.items.find(item => item.id === id);

    if (!user) return null;

    return user as IUserResponseDTO;
  }

  async findByEmail(email: string): Promise<IUserResponseDTO | null> {
    const user = this.items.find(item => item.email === email);

    if (!user) return null;

    return user as IUserResponseDTO;
  }
}

export { InMemoryUsersRepository };
