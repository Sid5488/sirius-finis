import { AppError } from "@/errors/app-error";

import { ICategoryRepository } from "../repositories/i-category-repository";
import { 
  IExecuteUpdateCategory, 
  IUpdateCategoryUseCase 
} from "../interfaces/i-update-category-use-case";

class UpdateCategoryUseCase implements IUpdateCategoryUseCase {
  constructor(private readonly _repository: ICategoryRepository) {}

  async execute({ id, name, userId }: IExecuteUpdateCategory): Promise<void> {
    const getCategoryById = await this._repository.findById(id, userId);
    const categoryAlreadyExist = await this._repository
      .findByName(name, userId);

    if (!getCategoryById) throw new AppError("Category not found.", 204);
    
    if (getCategoryById.userId !== userId) {
      throw new AppError(
        "You cannot update this category as it is not yours.", 403
      );
    }

    if (categoryAlreadyExist) throw new AppError("Category already exist", 406);

    await this._repository.save({ id, name, userId });
  }
}

export { UpdateCategoryUseCase };
