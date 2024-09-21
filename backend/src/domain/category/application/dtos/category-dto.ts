interface ICreateCategoryDTO {
  name: string;
  userId: string;
}

interface ISaveCategoryDTO {
  id: string;
  name: string;
  userId: string;
}

interface ICategoryResponseDTO {
  id: string;
  name: string;
  userId: string;
}

interface ICategoryDTO {
  id?: string;
  name: string;
  userId: string;

  createdAt: Date;
  updatedAt?: Date;
  removedAt?: Date;
}

export { 
  ICreateCategoryDTO, 
  ISaveCategoryDTO, 
  ICategoryResponseDTO, 
  ICategoryDTO 
};
