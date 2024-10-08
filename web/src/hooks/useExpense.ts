import { useContext } from 'react';

import { ExpenseContext } from '../context/expenseContext';

const useExpense = () => {
  const context = useContext(ExpenseContext);

  return context;
};

export { useExpense };
