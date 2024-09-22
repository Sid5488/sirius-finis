import { IExpenseResponseDTO } from "../dtos/expense-dto";

export interface IGetByIdExpenseUseCase {
  execute(id: string, userId: string): Promise<IExpenseResponseDTO | null>;
}
