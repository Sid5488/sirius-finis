import { AppError } from "@/errors/app-error";
import { ICategoryRepository } from "../repositories/i-category-repository";
import { 
  IExecuteDeleteCategoriesUseCase 
} from "../interfaces/i-delete-category-use-case";

class DeleteCategoryUseCase {
  constructor(private readonly _repository: ICategoryRepository) {}

  async execute(
    { id, userId }: IExecuteDeleteCategoriesUseCase
  ): Promise<void> {
    const getCategory = await this._repository.findById(id, userId);

    if (!getCategory) throw new AppError("Category not found.", 204);

    if (getCategory.userId !== userId) {
      throw new AppError(
        "You cannot delete this category as it is not yours.",
        403
      );
    }

    await this._repository.delete(id, userId);
  }
}

export { DeleteCategoryUseCase };
