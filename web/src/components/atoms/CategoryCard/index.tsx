import { useState } from "react";
import { Link } from "react-router-dom";
import { PencilSimpleLine, Trash } from "phosphor-react";

import { ICategoryCard } from "../../../interfaces/category-card";

import { Container } from "./style";

import { CustomModal } from "../../organisms/CustomModal";
import { DeleteModal } from "./components/DeleteModal";

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
