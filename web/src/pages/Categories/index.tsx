import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Hand, PlusCircle } from "phosphor-react";
import { toast } from "react-toastify";

import { Container, Header, Content } from "./style";

import { CategoryList } from "../../components/organisms/CategoryList";
import { useCategory } from "../../hooks/useCategory";
import { capitalizeFirstLetter } from "../../helpers/string-helpers";

const Categories = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('cadastrar');
  const { createCategory, getCategoryById, updateCategory } = useCategory();

  const fetchCategory = useCallback(async () => {
    if (id !== undefined) {
      const category = await getCategoryById(id);
      
      if (category) setName(category.name);
      
      setMessage('atualizar');
    }
  }, [getCategoryById, id]);

  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);

  const resetForm = () => {
    setName('');
    setMessage('cadastrar');
  }

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let response: boolean = false;

    if (!id) response = await createCategory(name);
    else response = await updateCategory(id, name);

    setName('');

    if (!response) {
      return toast.error(`Ocorreu um erro ao ${message} a categoria!`);
    }

    resetForm();

    toast.success(`Categoria ${message} com sucesso!`);
    return navigate('/categories');
  };

  const onCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    resetForm();

    return navigate('/categories');
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

            {message === 'cadastrar' ? (
              <button type="submit" onClick={onSubmit}>
                {capitalizeFirstLetter(message)} 
                <PlusCircle size={20} />
              </button>
            ): (
              <>
                <button type="submit" onClick={onSubmit}>
                  {capitalizeFirstLetter(message)} 
                  <PlusCircle size={20} />
                </button>

                <button className="cancel" type="submit" onClick={onCancel}>
                  Cancelar
                  <Hand size={20} />
                </button>
              </>
            )}
          </form>

          <CategoryList />
        </main>
      </Content>
    </Container>
  )
};

export { Categories };
