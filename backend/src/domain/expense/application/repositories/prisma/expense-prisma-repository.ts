import { 
  ICreateExpenseDTO, 
  ISaveExpenseDTO, 
  IExpenseResponseDTO 
} from "../../dtos/expense-dto";
import { prisma } from "@/infra/database/prisma";
import { IExpenseRepository } from "../i-expense-repository";

class ExpensePrismaRepository implements IExpenseRepository {
  async create(data: ICreateExpenseDTO): Promise<void> {
    await prisma.expense.create({ data });
  }

  async save(data: ISaveExpenseDTO): Promise<void> {
    await prisma.expense.update({
      data,
      where: { 
        id: data.id 
      }
    });
  }

  async delete(id: string, userId: string): Promise<void> {
    await prisma.expense.update({
      data: { removedAt: new Date() },
      where: { id, userId }
    });
  }

  async findById(
    id: string, 
    userId: string
  ): Promise<IExpenseResponseDTO | null> {
    return await prisma.expense.findUnique({
      where: { 
        id,
        userId, 
        removedAt: null 
      }
    });
  }

  async findByCategory(
    categoryId: string, 
    userId: string
  ): Promise<IExpenseResponseDTO[] | null> {
    return await prisma.expense.findMany({
      where: {
        categoryId, 
        userId, 
        removedAt: null
      }
    });
  }

  async findByUserId(userId: string): Promise<IExpenseResponseDTO[] | null> {
    return await prisma.expense.findMany({
      where: {
        userId,
        removedAt: null
      }
    });
  }
}

export { ExpensePrismaRepository };
