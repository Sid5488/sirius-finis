import { MouseEvent, useState } from 'react';
import { PencilSimpleLine, Trash } from 'phosphor-react';

import { IExpense } from '../../../interfaces/expense';

import { CustomModal } from '../CustomModal';
import { FormExpenseModal } from 
  '../../../pages/Expenses/components/FormExpenseModal';

import { Table } from './style';
import { DeleteModal } from '../../../pages/Expenses/components/DeleteModal';

interface IExpenseTable {
  list: IExpense[]
}

const ExpenseTable: React.FC<IExpenseTable> = ({ list }: IExpenseTable) => {
  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [label, setLabel] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const formattedCurrency = (price: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const formattedDate = (date: Date): string => {
    return new Date(date).toLocaleDateString('pt-BR');
  };

  const handleEdit = (e: MouseEvent<HTMLSpanElement>, value: string) => {
    e.preventDefault();

    setId(value);
    setTitle('Editar Despesa');
    setLabel('edit');
    openModal();
  };

  const handleDelete = (
    e: MouseEvent<HTMLSpanElement>, 
    value: string, 
    name: string
  ) => {
    e.preventDefault();

    setTitle('Apagar Despesa');
    setLabel('delete');
    setId(value);
    setName(name);
    openModal();
  }

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th colSpan={2}>Data</th>
          </tr>
        </thead>

        <tbody>
          {list.map(item => (
            <tr key={item.id}>
              <td>{item.title ? item.title : 'Não informado'}</td>
              <td>{item.Category.name}</td>
              <td>{formattedCurrency(item.price)}</td>
              <td>{formattedDate(item.createdAt)}</td>

              <td className="action">
                <span onClick={e => handleDelete(e, item.id, item.title)}>
                  <Trash size={18} />
                </span>

                <span onClick={e => handleEdit(e, item.id)}>
                  <PencilSimpleLine size={18} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <CustomModal
        title={title}
        label={label}
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        {label === 'edit' 
          ? <FormExpenseModal id={id} closeModal={closeModal} />
          : <DeleteModal id={id} closeModal={closeModal} name={name} />}
        
      </CustomModal>
    </>
  );
};

export { ExpenseTable };
