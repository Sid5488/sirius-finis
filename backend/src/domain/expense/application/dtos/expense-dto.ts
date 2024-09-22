interface ICreateExpenseDTO {
  price: number;

  categoryId: string;
  userId: string;
}

interface ISaveExpenseDTO {
  id: string;
  price?: number;

  categoryId?: string;
  userId: string;
}

interface IExpenseResponseDTO {
  id: string;
  price: number | any;

  categoryId: string;
  userId: string;
}

interface ExpenseDTO {
  id: string;
  price: number;

  categoryId: string;
  userId: string;

  createdAt: Date;
  updatedAt?: Date;
  removedAt?: Date;
}

export { 
  ICreateExpenseDTO,
  ISaveExpenseDTO,
  IExpenseResponseDTO,
  ExpenseDTO 
};
