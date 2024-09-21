import { AppError } from "@/errors/app-error";

import { ICategoryRepository } from "../repositories/i-category-repository";
import { 
  IExecuteUpdateCategory, 
  IUpdateCategoryUseCase 
} from "../interfaces/i-update-category-use-case";

class UpdateCategoryUseCase implements IUpdateCategoryUseCase {
  constructor(private readonly _repository: ICategoryRepository) {}

  async execute({ id, name, userId }: IExecuteUpdateCategory): Promise<void> {
    const categoryAlreadyExist = await this._repository
      .findByName(name, userId);

    if (categoryAlreadyExist) throw new AppError("Category already exist", 406);

    await this._repository.save({ id, name, userId });
  }
}

export { UpdateCategoryUseCase };
