import { 
  ICreateExpenseDTO, 
  IExpenseResponseDTO, 
  ISaveExpenseDTO 
} from "../dtos/expense-dto";

export interface IExpenseRepository {
  create(data: ICreateExpenseDTO): Promise<void>;

  save(data: ISaveExpenseDTO): Promise<void>;

  delete(id: string): Promise<void>;

  findById(
    id: string, 
    userId: string
  ): Promise<IExpenseResponseDTO | null>;

  findByCategory(
    categoryId: string, 
    userId: string
  ): Promise<IExpenseResponseDTO[] | null>;

  findByUserId(userId: string): Promise<IExpenseResponseDTO[] | null>;
}
