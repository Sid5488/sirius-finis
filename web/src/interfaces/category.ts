export interface ICategory {
  id: string;
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  removedAt?: Date;
}
