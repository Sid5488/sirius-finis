import { ICategoryResponseDTO } from "../dtos/category-dto";

export interface IExecuteGetAllCategoriesUseCase {
  userId: string;
}

export interface IGetAllCategoriesUseCase {
  execute(
    { userId }: IExecuteGetAllCategoriesUseCase
  ): Promise<ICategoryResponseDTO[] | null>;
}
