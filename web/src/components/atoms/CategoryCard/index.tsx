import { PencilSimpleLine, Trash } from "phosphor-react";

import { ICategoryCard } from "../../../interfaces/category-card";

import { Container } from "./style";

const CategoryCard = ({ name }: ICategoryCard) => {
  return (
    <Container>
      <div className="content">
        <span>{ name }</span>
      </div>

      <div className="action">
        <span>
          <Trash size={18} />
        </span>

        <span>
          <PencilSimpleLine size={18} />
        </span>
      </div>
    </Container>
  );
};

export { CategoryCard };
