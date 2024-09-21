interface IExecuteUpdateCategory {
  id: string;
  name: string;
  userId: string;
}

interface IUpdateCategoryUseCase {
  execute({ id, name, userId }: IExecuteUpdateCategory): Promise<void>;
}

export { IUpdateCategoryUseCase, IExecuteUpdateCategory };
