import { IExpenseResponseDTO } from "../dtos/expense-dto";
import { IExpenseRepository } from "../repositories/i-expense-repository";
import { IGetAllExpenseUseCase } from 
  "../interfaces/i-get-all-expense-use-case";

class GetAllExpenseUseCase implements IGetAllExpenseUseCase {
  constructor(private readonly _repository: IExpenseRepository) {} 

  async execute(userId: string): Promise<IExpenseResponseDTO[] | null> {
    return this._repository.findByUserId(userId);
  }
}

export { GetAllExpenseUseCase };
