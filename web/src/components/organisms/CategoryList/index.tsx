import { useState } from "react";
import { ClipboardText } from "phosphor-react";

import { Container } from "./style";
import { CategoryCard } from "../../atoms/CategoryCard";

const CategoryList = () => {
  const [categories] = useState([
    {
      id: "1bd1c283-3121-4dbf-9979-92a1d8cdecf5",
      name: "Entretenimento",
      userId: "14e1b733-4a6d-49cd-923f-09fa58d529c1",
      createdAt: "2024-09-21T23:11:12.913Z",
      updatedAt: "2024-09-21T23:11:51.727Z",
      removedAt: null
    },
    {
      id: "1bd1c283-3121-4dbf-9979-92a1d8cdecf2",
      name: "Casa",
      userId: "14e1b733-4a6d-49cd-923f-09fa58d529c1",
      createdAt: "2024-09-21T23:11:12.913Z",
      updatedAt: "2024-09-21T23:11:51.727Z",
      removedAt: null
    }
  ])

  return (
    <Container>
      {categories.length !== 0 ? (
        <div className="list">
          <header>
            Total de categorias: {categories.length}
          </header>

          <div>
            {categories.map(category => (
              <CategoryCard key={category.id} name={category.name} />
            ))}
          </div>
        </div>
      ) : (
        <div className="empty">
          <header>
            Total de categorias: {categories.length}
          </header>

          <div>
            <ClipboardText size={80} color="#ddd" />

            <p>
              <strong>Você ainda não tem categorias cadastradas</strong>
            </p>

            <p>Crie categorias e organize suas despesas</p>
          </div>
        </div>
      )}
    </Container>
  );
};

export { CategoryList };
