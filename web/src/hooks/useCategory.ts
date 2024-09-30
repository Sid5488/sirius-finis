import { useContext } from "react";

import { CategoryContext } from "../context/categoryContext";

const useCategory = () => {
  const context = useContext(CategoryContext);

  return context;
};

export { useCategory };
