import { 
  ICreateExpenseUseCase, 
  IExecuteExpenseUseCase 
} from "../interfaces/i-create-expense-use-case";
import { IExpenseRepository } from "../repositories/i-expense-repository";

class CreateExpenseUseCase implements ICreateExpenseUseCase {
  constructor(private readonly _repository: IExpenseRepository) {}

  async execute({ 
    price, 
    categoryId, 
    userId 
  }: IExecuteExpenseUseCase): Promise<void> {
    await this._repository.create({ price, categoryId, userId });
  }
}

export { CreateExpenseUseCase };
