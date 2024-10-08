import { createContext, useCallback, useState } from 'react';

import { IExpense, TCreateExpense, TUpdateExpense } from '../interfaces/expense';

import { useAuth } from '../hooks/useAuth';
import { siriusFinisAPI } from '../api/siriusFinis';
import { emitterMessage } from '../libs/toastify/emitterMessage';

export interface IExpenseContext {
  expenses: IExpense[]
  setExpenses: (value: React.SetStateAction<IExpense[]>) => void;
  fetchExpenses: () => Promise<void>;
  deleteExpense: (id: string) => Promise<void>;
  create: ({ title, price, categoryId }: TCreateExpense) => Promise<void>;
  update: ({ id, title, price, categoryId }: TUpdateExpense) => Promise<void>;
}

interface IExpenseContextProvider {
  children: React.ReactNode;
}

const ExpenseContext = createContext({} as IExpenseContext);

const ExpensesProvider = ({ children }: IExpenseContextProvider) => {
  const [expenses, setExpenses] = useState<IExpense[]>([]);
  const { token } = useAuth();

  const deleteExpense = async (id: string): Promise<void> => {
    if (token !== '' && token !== undefined) {
      try {
        await siriusFinisAPI.delete(`/expenses/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      } catch (error: unknown | undefined) {
        throw new Error(error as string)
      }
    }

    await fetchExpenses();
  }

  const create = async ({ 
    title, 
    price, 
    categoryId 
  }: TCreateExpense): Promise<void> => {
    if (token !== '' && token !== undefined) {
      try {
        await siriusFinisAPI.post('/expenses', {
          title,
          price,
          categoryId
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        await fetchExpenses();
      } catch (error) {
        if (error) 
          emitterMessage('Ocorreu um erro ao criar a despesa', 'error');
      }
    }
  };

  const update = async ({ 
    id,
    title, 
    price, 
    categoryId 
  }: TUpdateExpense): Promise<void> => {
    if (token !== '' && token !== undefined) {
      try {
        await siriusFinisAPI.put(`/expenses/${id}`, {
          title,
          price,
          categoryId
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        await fetchExpenses();
      } catch (error) {
        if (error) 
          emitterMessage('Ocorreu um erro ao criar a despesa', 'error');
      }
    }
  };

  const fetchExpenses = useCallback(async () => {
    if (token !== '' && token !== undefined) {
      try {
        const { data } = await siriusFinisAPI.get('/expenses', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
    
        setExpenses(data);
      } catch (error) {
        if (error) 
          emitterMessage('Ocorreu um erro ao buscar as despesas', 'error');
      }
    }
  }, [token]);

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        setExpenses,
        fetchExpenses,
        create,
        update,
        deleteExpense
      }}
    >
      { children }
    </ExpenseContext.Provider>
  );
};

export { ExpenseContext, ExpensesProvider };
