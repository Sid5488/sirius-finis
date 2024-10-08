export interface IExecuteUpdateExpense {
  id: string;
  userId: string;
  
  title?: string;
  price?: number;
  categoryId?: string;
}

export interface IUpdateExpenseUseCase {
  execute({ 
    id, 
    userId, 
    title, 
    price, 
    categoryId 
  }: IExecuteUpdateExpense): Promise<void>;
}
