import { 
  IExecuteUpdateExpense, 
  IUpdateExpenseUseCase 
} from "../interfaces/i-update-expense-use-case";
import { AppError } from "@/errors/app-error";
import { IExpenseRepository } from "../repositories/i-expense-repository";

class UpdateExpenseUseCase implements IUpdateExpenseUseCase {
  constructor(private readonly _repository: IExpenseRepository) {}

  async execute({ 
    id, 
    userId, 
    title,
    price, 
    categoryId 
  }: IExecuteUpdateExpense): Promise<void> {
    const expenseExist = await this._repository.findById(id, userId);

    if (!expenseExist) throw new AppError("Expense not found.", 204);

    if (expenseExist.userId !== userId) {
      throw new AppError(
        "You cannot update this category as it is not yours.", 403
      );
    }

    await this._repository.save({
      id,
      title,
      price,
      userId,
      categoryId
    });
  }
}

export { UpdateExpenseUseCase };
