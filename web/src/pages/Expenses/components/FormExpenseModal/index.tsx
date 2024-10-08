import { MouseEvent, useCallback, useEffect, useRef } from "react";

import { Form } from "./style";

import { Input } from "../../../../components/atoms/Form/Input";
import { Select } from "../../../../components/atoms/Form/Select";
import { useCategory } from "../../../../hooks/useCategory";
import { useExpense } from "../../../../hooks/useExpense";
import { DataType, TExpenseDTO } from "../../../../interfaces/expense";

interface IFormExpenseModal {
  id?: string | null;
  closeModal: () => void;
}

const FormExpenseModal = ({ id, closeModal }: IFormExpenseModal) => {
  const { create, update } = useExpense();
  const { getAllCategories, categories } = useCategory();

  const titleInputRef = useRef<HTMLInputElement>(null);
  const priceInputRef = useRef<HTMLInputElement>(null);
  const categoryIdInputRef = useRef<HTMLSelectElement>(null);

  const fetchAllCategories = useCallback(async () => {
    await getAllCategories();
  }, [getAllCategories]);

  useEffect(() => {
    fetchAllCategories();
  }, [fetchAllCategories]);

  const handleCloseModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    closeModal();
  };

  const resetForm = () => {
    if (titleInputRef.current) {
      titleInputRef.current.value = '';
    }

    if (priceInputRef.current) {
      priceInputRef.current.value = '';
    }

    if (categoryIdInputRef.current) {
      categoryIdInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const title = titleInputRef.current!.value;
    const price = Number(priceInputRef.current!.value);
    const categoryId = categoryIdInputRef.current!.value;

    const data: DataType = {
      title: title !== '' ? title : undefined,
      price: !isNaN(price) ? price : undefined,
      categoryId: categoryId !== '' ? categoryId : undefined
    };

    const buildedData: TExpenseDTO = {};
    Object.getOwnPropertyNames(data).forEach((key: string) => {
      if (data[key] !== undefined && data[key] !== 0) {
        Object.assign(buildedData, { [key]: data[key] });
      }
    })

    if (id) {
      await update({
        id,
        ...buildedData
      });

      closeModal();
    } else {
      await create({ title, price, categoryId });

      closeModal();
    }

    resetForm();
  };

  return (
    <Form>
      <fieldset>
        <legend>Dados da despesa</legend>

        <div>
          <label htmlFor="title">Título</label>
          <Input 
            required
            id="title"
            type="text" 
            name="title"
            ref={titleInputRef}
            placeholder="Entretenimento"
          />
        </div>

        <div>
          <label htmlFor="price">Preço</label>
          <Input
            required
            id="price" 
            name="price"
            type="number"
            ref={priceInputRef}
            placeholder="49.99"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Tipo</legend>

        <div>
          <label htmlFor="category">Categoria</label>
          <Select 
            id="category"
            name="category"
            ref={categoryIdInputRef}
            defaultValue={''}
          >
            <option value="" disabled>Selecione</option>

            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Select>
        </div>
      </fieldset>

      <footer>
        <button onClick={handleSubmit}>Salvar</button>
        <button onClick={handleCloseModal}>Cancelar</button>
      </footer>
    </Form>
  );
};

export { FormExpenseModal };
