import { toast } from "react-toastify";

import { DeleteCategory } from "./style";

import { useExpense } from "../../../../hooks/useExpense";

interface IDeleteModal {
  id: string;
  name: string;
  closeModal: () => void;
}

const DeleteModal = ({ id, name, closeModal }: IDeleteModal) => {
  const { deleteExpense } = useExpense();

  const handleDelete = async (id: string) => {
    try {
      await deleteExpense(id);

      closeModal();

      return toast.success('Despesa apagada com sucesso!');
    } catch (error) {
      if (error) 
        return toast.error('Ocorreu um erro ao tentar apagar a despesa.');
    }
  }

  return (
    <DeleteCategory>
      <h3>{ name }</h3>

      <div>
        <button onClick={() => handleDelete(id)}>Ok</button>
        <button onClick={closeModal}>Cancelar</button>
      </div>
    </DeleteCategory>
  )
};

export { DeleteModal };
