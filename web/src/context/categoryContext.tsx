import { createContext, ReactNode, useCallback, useState } from "react";

import { ICategory } from "../interfaces/category";
import { siriusFinisAPI } from "../api/siriusFinis";

interface ICategoryProvider {
  children: ReactNode;
}

interface ICategoryContext {
  categories: ICategory[];
  setCategories: (value: React.SetStateAction<ICategory[]>) => void;
  createCategory: (name: string) => Promise<boolean>;
  getAllCategories: () => Promise<void>;
}

const CategoryContext = createContext({} as ICategoryContext);

const CategoryProvider = ({ children }: ICategoryProvider) => {
  const token = sessionStorage.getItem('@sirius-fins:token');
  const [categories, setCategories] = useState<ICategory[]>([]);

  const createCategory = async (name: string): Promise<boolean> => {
    const response = await siriusFinisAPI.post('/categories', { name }, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });

    if (response.status === 201) {
      await getAllCategories();

      return true;
    }

    return false;
  };

  const getAllCategories = useCallback(async (): Promise<void> => {
    const { data } = await siriusFinisAPI.get('/categories', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setCategories(data);
  }, [token]);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        setCategories,
        createCategory, 
        getAllCategories
      }}
    >
      { children }
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider };
