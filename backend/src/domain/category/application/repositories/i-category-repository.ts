import {
  ICategoryResponseDTO,
  ICreateCategoryDTO,
  ISaveCategoryDTO
} from "../dtos/category-dto";

interface ICategoryRepository {
  create(data: ICreateCategoryDTO): Promise<void>;

  save(data: ISaveCategoryDTO): Promise<void>;

  delete(id: string): Promise<void>;

  findById(id: string): Promise<ICategoryResponseDTO | null>;

  findByName(name: string, userId: string): Promise<ICategoryResponseDTO | null>;

  findByUserId(userId: string): Promise<ICategoryResponseDTO[] | null>;
}

export { ICategoryRepository };
