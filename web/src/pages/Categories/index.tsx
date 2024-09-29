import { PlusCircle } from "phosphor-react";

import { Container, Header, Content } from "./style";

import { CategoryList } from "../../components/organisms/CategoryList";

const Categories = () => {
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
              type="text" 
              required
            />

            <button type="submit">
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
