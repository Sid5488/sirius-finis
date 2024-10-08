import { ICategoryDTO, ICategoryToExpenseDTO } from "@/domain/category/application/dtos/category-dto";

interface ICreateExpenseDTO {
  title: string;
  price: number;

  categoryId: string;
  userId: string;
}

interface ISaveExpenseDTO {
  id: string;
  title?: string;
  price?: number;

  categoryId?: string;
  userId: string;
}

interface IExpenseResponseDTO {
  id: string;
  title?: string | undefined | null;
  price: number | any;

  categoryId: string;
  userId: string;
  Category?: ICategoryToExpenseDTO | null;
}

interface ExpenseDTO {
  id: string;
  title: string;
  price: number;

  categoryId: string;
  userId: string;

  createdAt: Date;
  updatedAt?: Date;
  removedAt?: Date;
}

export { 
  ICreateExpenseDTO,
  ISaveExpenseDTO,
  IExpenseResponseDTO,
  ExpenseDTO 
};
