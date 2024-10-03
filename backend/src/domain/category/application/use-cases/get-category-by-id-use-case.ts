import { 
  IExecuteGetCategoryByIdUseCase, 
  IGetCategoryByIdUseCase 
} from "../interfaces/i-get-category-by-id-use-case";
import { ICategoryResponseDTO } from "../dtos/category-dto";
import { ICategoryRepository } from "../repositories/i-category-repository";

class GetCategoryByIdUseCase implements IGetCategoryByIdUseCase {
  constructor(private readonly _repository: ICategoryRepository) {}

  async execute(
    { id, userId }: IExecuteGetCategoryByIdUseCase
  ): Promise<ICategoryResponseDTO | null> {
    return await this._repository.findById(id, userId);
  }
}

export { GetCategoryByIdUseCase };
