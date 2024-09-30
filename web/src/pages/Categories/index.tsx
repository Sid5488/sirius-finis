import { useState } from "react";
import { PlusCircle } from "phosphor-react";

import { Container, Header, Content } from "./style";

import { CategoryList } from "../../components/organisms/CategoryList";
import { useCategory } from "../../hooks/useCategory";
import { toast } from "react-toastify";

const Categories = () => {
  const [name, setName] = useState<string>('');
  const { createCategory } = useCategory();

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const response = await createCategory(name);

    if (!response) 
      return toast.warn('Ocorreu um erro ao cadastrar a categoria!');

    return toast.success('Categoria cadastrada com sucesso!');
  };

  return (
    <Container>
      <Header>
        <h1>Categorias</h1>
      </Header>

      <Content>
        <main>
          <form>
            <input 
              placeholder="Adicione uma nova categoria"
              value={name}
              onChange={e => setName(e.target.value)}
              type="text" 
              required
            />

            <button type="submit" onClick={onSubmit}>
              Cadastrar 
              <PlusCircle size={20} />
            </button>
          </form>

          <CategoryList />
        </main>
      </Content>
    </Container>
  )
};

export { Categories };
