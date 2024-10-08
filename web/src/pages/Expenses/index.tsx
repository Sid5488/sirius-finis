import { useCallback, useEffect, useState } from 'react';
import { PlusCircle } from 'phosphor-react';

import { Container } from './style';

import { ExpenseTable } from '../../components/organisms/ExpenseTable';
import { useExpense } from '../../hooks/useExpense';
import { CustomModal } from '../../components/organisms/CustomModal';
import { FormExpenseModal } from './components/FormExpenseModal';

const Expenses = () => {
  const { expenses, fetchExpenses } = useExpense();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const fetchAllExpenses = useCallback(async () => {
    await fetchExpenses();
  }, [fetchExpenses]);

  useEffect(() => {
    fetchAllExpenses();
  }, [fetchAllExpenses]);

  return (
    <Container>
      <main>
        <h1>Despesas</h1>

        <div>
          <button type="submit" onClick={openModal}>
            Adicionar
            <PlusCircle size={20} />
          </button>

          <ExpenseTable list={expenses} />
        </div>

        <CustomModal
          title="Adicionar despesa"
          label="Add category"
          modalIsOpen={modalIsOpen}
          openModal={openModal}
          closeModal={closeModal}
        >
          <FormExpenseModal closeModal={closeModal} />
        </CustomModal>
      </main>
    </Container>
  );
};

export { Expenses };
