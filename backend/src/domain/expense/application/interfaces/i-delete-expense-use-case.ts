export interface IExecuteDeleteExpense {
  id: string;
  userId: string;
}

export interface IDeleteExpenseUseCase {
  execute({ id, userId }: IExecuteDeleteExpense): Promise<void>;
}
