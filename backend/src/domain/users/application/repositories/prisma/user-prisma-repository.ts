import { prisma } from "@/infra/database/prisma";

import { 
  ICreateUserDTO, 
  ISaveUserDTO, 
  IUserResponseDTO 
} from "../../dtos/user-dto";
import { IUserRepository } from "../user-repository";

class UserPrismaRepository implements IUserRepository {
  async create(data: ICreateUserDTO): Promise<void> {
    await prisma.user.create({ data });
  }

  async save(data: ISaveUserDTO): Promise<void> {
    await prisma.user.update({
      data,
      where: { id: data.id },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.user.update({
      data: { removedAt: new Date() },
      where: { id },
    });
  }

  async findById(id: string): Promise<IUserResponseDTO | null> {
    return await prisma.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<IUserResponseDTO | null> {
    return await prisma.user.findUnique({ where: { email } });
  }
}

export { UserPrismaRepository };
