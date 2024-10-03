import { Link } from "react-router-dom";
import { PencilSimpleLine, Trash } from "phosphor-react";

import { ICategoryCard } from "../../../interfaces/category-card";

import { Container, DeleteCategory } from "./style";
import { CustomModal } from "../../organisms/CustomModal";
import { useState } from "react";
import { toast } from "react-toastify";
import { useCategory } from "../../../hooks/useCategory";

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

const CategoryCard = ({ name, id }: ICategoryCard) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <Container>
      <div className="content">
        <span>{ name }</span>
      </div>

      <div className="action">
        <span onClick={openModal}>
          <Trash size={18} />
        </span>

        <Link to={`/categories/${id}`}>
          <PencilSimpleLine size={18} />
        </Link>
      </div>

      <CustomModal
        title="Deseja apagar esta cagoria?"
        label="Delete category"
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <DeleteModal id={id} closeModal={closeModal} name={name} />
      </CustomModal>
    </Container>
  );
};

export { CategoryCard };
