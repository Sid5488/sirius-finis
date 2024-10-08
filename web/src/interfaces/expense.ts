export type IExpense = {
  id: string;
  price: number;
  title: string;
  categoryId: string;
  createdAt: Date;
  Category: {
    name: string;
  }
};

export interface DataType {
  [key: string]: unknown;
}

export type TExpenseDTO = {
  id?: string;
  price?: number;
  title?: string;
  categoryId?: string;
};

export type TCreateExpense = {
  price: number;
  title: string;
  categoryId: string;
};

export type TUpdateExpense = {
  id: string;
  price?: number;
  title?: string;
  categoryId?: string;
};
