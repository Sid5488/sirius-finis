import { toast } from "react-toastify";

import { useCategory } from "../../../../../hooks/useCategory";
import { DeleteCategory } from "./style";

interface IDeleteModal {
  id: string;
  name: string;
  closeModal: () => void;
}

const DeleteModal = ({ id, name, closeModal }: IDeleteModal) => {
  const { deleteCategory } = useCategory();

  const handleDelete = async (id: string) => {
    try {
      await deleteCategory(id);

      closeModal();

      return toast.success('Categoria apagada com sucesso!');
    } catch (error) {
      if (error) 
        return toast.error('Ocorreu um erro ao tentar apagar a categoria.');
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
