import { IExpenseResponseDTO } from "../dtos/expense-dto";
import { IExpenseRepository } from "../repositories/i-expense-repository";
import { IGetByIdExpenseUseCase } from 
  "../interfaces/i-get-by-id-expense-use-case";

class GetByIdxpenseUseCase implements IGetByIdExpenseUseCase {
  constructor(private readonly _repository: IExpenseRepository) {} 

  async execute(
    id: string, 
    userId: string
  ): Promise<IExpenseResponseDTO | null> {
    return this._repository.findById(id, userId);
  }
}

export { GetByIdxpenseUseCase };
