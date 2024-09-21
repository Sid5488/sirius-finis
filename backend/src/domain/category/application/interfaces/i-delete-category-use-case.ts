export interface IExecuteDeleteCategoriesUseCase {
  id: string;
  userId: string;
}

export interface IDeleteCategoriesUseCase {
  execute({ id, userId }: IExecuteDeleteCategoriesUseCase): Promise<void>;
}
