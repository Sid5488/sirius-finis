import { useCallback, useEffect } from "react";
import { ClipboardText } from "phosphor-react";

import { Container } from "./style";

import { CategoryCard } from "../../atoms/CategoryCard";
import { useCategory } from "../../../hooks/useCategory";

const CategoryList = () => {
  const { getAllCategories, categories } = useCategory();

  const fetchCategories = useCallback(async () => {
    await getAllCategories();
  }, [getAllCategories]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <Container>
      {categories.length !== 0 ? (
        <div className="list">
          <header>
            Total de categorias: {categories.length}
          </header>

          <div>
            {categories.map(category => (
              <CategoryCard 
                id={category.id}
                key={category.id} 
                name={category.name} 
              />
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
