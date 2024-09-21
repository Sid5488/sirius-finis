export interface IExecuteCreateCategoryUseCase {
  name: string;
  userId: string;
}

export interface ICreateCategoryUseCase {
  execute({ name }: IExecuteCreateCategoryUseCase): Promise<void>;
}
