export interface IExecuteExpenseUseCase {
  title: string;
  price: number;
  categoryId: string;
  userId: string;
}

export interface ICreateExpenseUseCase {
  execute({ 
    title, 
    price, 
    categoryId, 
    userId 
  }: IExecuteExpenseUseCase): Promise<void>;
}
