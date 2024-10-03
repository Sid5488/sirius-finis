import { ICategoryResponseDTO } from "../dtos/category-dto";

export interface IExecuteGetCategoryByIdUseCase {
  id: string;
  userId: string;
}

export interface IGetCategoryByIdUseCase {
  execute(
    { id, userId }: IExecuteGetCategoryByIdUseCase
  ): Promise<ICategoryResponseDTO | null>;
}
