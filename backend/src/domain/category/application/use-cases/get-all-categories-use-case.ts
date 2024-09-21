import { ICategoryRepository } from "../repositories/i-category-repository";
import { 
  IGetAllCategoriesUseCase,
  IExecuteGetAllCategoriesUseCase 
} from "../interfaces/i-get-all-categories-use-case";
import { ICategoryResponseDTO } from "../dtos/category-dto";

class GetAllCategoriesUseCase implements IGetAllCategoriesUseCase {
  constructor(private readonly _repository: ICategoryRepository) {}

  async execute(
    { userId }: IExecuteGetAllCategoriesUseCase
  ): Promise<ICategoryResponseDTO[] | null> {
    return await this._repository.findByUserId(userId);
  }
}

export { GetAllCategoriesUseCase };
