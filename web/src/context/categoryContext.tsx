import { createContext, ReactNode, useCallback, useState } from "react";

import { ICategory } from "../interfaces/category";
import { siriusFinisAPI } from "../api/siriusFinis";
import { useAuth } from "../hooks/useAuth";

interface ICategoryProvider {
  children: ReactNode;
}

interface ICategoryContext {
  categories: ICategory[];
  setCategories: (value: React.SetStateAction<ICategory[]>) => void;
  createCategory: (name: string) => Promise<boolean>;
  updateCategory: (id: string, name: string) => Promise<boolean>;
  getCategoryById: (id: string) => Promise<ICategory | void>;
  getAllCategories: () => Promise<void>;
  deleteCategory: (id: string) => Promise<void>;
}

const CategoryContext = createContext({} as ICategoryContext);

const CategoryProvider = ({ children }: ICategoryProvider) => {
  const { token } = useAuth();
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

  const updateCategory = async (id: string, name: string): Promise<boolean> => {
    try {
      const response = await siriusFinisAPI.put(`/categories/${id}`, { name }, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
  
      if (response.status === 200) {
        await getAllCategories();
  
        return true;
      }

      return false;
    } catch (error) {
      if (error) return false;

      return false
    }
  };

  const getCategoryById = async (id: string): Promise<ICategory | void> => {
    if (token !== '' && token !== undefined) {
      const { data } = await siriusFinisAPI.get(`/categories/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      return data as ICategory;
    }
  }

  const deleteCategory = async (id: string): Promise<void> => {
    if (token !== '' && token !== undefined) {
      try {
        await siriusFinisAPI.delete(`/categories/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      } catch (error: unknown | undefined) {
        throw new Error(error as string)
      }
    }

    await getAllCategories();
  }

  const getAllCategories = useCallback(async (): Promise<void> => {
    if (token !== '' && token !== undefined) {
      const { data } = await siriusFinisAPI.get('/categories', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      setCategories(data);
    }
  }, [token]);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        setCategories,
        createCategory, 
        updateCategory,
        getCategoryById,
        getAllCategories,
        deleteCategory
      }}
    >
      { children }
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider };
