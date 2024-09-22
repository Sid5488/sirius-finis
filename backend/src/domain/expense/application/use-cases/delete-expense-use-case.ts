import { 
  IDeleteExpenseUseCase, 
  IExecuteDeleteExpense 
} from "../interfaces/i-delete-expense-use-case";
import { IExpenseRepository } from "../repositories/i-expense-repository";
import { AppError } from "@/errors/app-error";

class DeleteExpenseUseCase implements IDeleteExpenseUseCase {
  constructor(private readonly _repository: IExpenseRepository) {}

  async execute({ 
    id, 
    userId,
  }: IExecuteDeleteExpense): Promise<void> {
    const expenseExist = await this._repository.findById(id, userId);

    if (!expenseExist) throw new AppError("Expense not found.", 204);

    if (expenseExist.userId !== userId) {
      throw new AppError(
        "You cannot delete this category as it is not yours.", 403
      );
    }

    await this._repository.delete(id, userId);
  }
}

export { DeleteExpenseUseCase };
