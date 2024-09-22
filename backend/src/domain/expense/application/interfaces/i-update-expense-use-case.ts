export interface IExecuteUpdateExpense {
  id: string;
  userId: string;

  price?: number;
  categoryId?: string;
}

export interface IUpdateExpenseUseCase {
  execute({ 
    id, 
    userId, 
    price, 
    categoryId 
  }: IExecuteUpdateExpense): Promise<void>;
}
