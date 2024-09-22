import { IExpenseResponseDTO } from "../dtos/expense-dto";

export interface IGetAllExpenseUseCase {
  execute(userId: string): Promise<IExpenseResponseDTO[] | null>;
}
