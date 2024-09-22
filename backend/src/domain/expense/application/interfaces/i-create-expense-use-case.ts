export interface IExecuteExpenseUseCase {
  price: number;
  categoryId: string;
  userId: string;
}

export interface ICreateExpenseUseCase {
  execute({ price, categoryId, userId }: IExecuteExpenseUseCase): Promise<void>;
}
