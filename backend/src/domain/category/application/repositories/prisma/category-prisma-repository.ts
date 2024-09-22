import { prisma } from "@/infra/database/prisma";

import { 
  ICategoryResponseDTO,
  ICreateCategoryDTO,
  ISaveCategoryDTO 
} from "../../dtos/category-dto";
import { ICategoryRepository } from "../i-category-repository";

class CategoryPrismaRepository implements ICategoryRepository {
  async create(data: ICreateCategoryDTO): Promise<void> {
    await prisma.category.create({ data });
  }

  async save(data: ISaveCategoryDTO): Promise<void> {
    await prisma.category.update({
      data,
      where: { 
        id: data.id 
      },
    });
  }

  async delete(id: string, userId: string): Promise<void> {
    await prisma.category.update({
      data: { removedAt: new Date() },
      where: { id, userId },
    });
  }

  async findById(
    id: string, 
    userId: string
  ): Promise<ICategoryResponseDTO | null> {
    return await prisma.category.findUnique({ 
      where: { 
        id, 
        userId, 
        removedAt: null 
      } 
    });
  }

  async findByName(
    name: string, 
    userId: string
  ): Promise<ICategoryResponseDTO | null> {
    return await prisma.category.findFirst({ 
      where: { 
        userId, 
        name, 
        removedAt: null
      } 
    });
  }

  async findByUserId(userId: string): Promise<ICategoryResponseDTO[] | null> {
    return await prisma.category.findMany({ 
      where: { 
        userId, 
        removedAt: null 
      } 
    });
  }
}

export { CategoryPrismaRepository };
