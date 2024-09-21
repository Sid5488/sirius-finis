import { ICategoryRepository } from "../repositories/i-category-repository";
import { 
  ICreateCategoryUseCase, 
  IExecuteCreateCategoryUseCase 
} from "../interfaces/i-create-category-use-case";
import { AppError } from "@/errors/app-error";

class CreateCategoryUseCase implements ICreateCategoryUseCase {
  constructor(private readonly _repository: ICategoryRepository) {}

  async execute({ name, userId }: IExecuteCreateCategoryUseCase): Promise<void> {
    const categoryAlreadyExist = await this._repository
      .findByName(name, userId);

    if (categoryAlreadyExist) throw new AppError("Category already exist", 406);

    await this._repository.create({ name, userId });
  }
}

export { CreateCategoryUseCase };
