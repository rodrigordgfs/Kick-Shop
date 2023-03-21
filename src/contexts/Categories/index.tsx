import { ICategories } from "@/interfaces/ICategories";
import { ReactNode, createContext, useState } from "react";

interface ICategoriesContext {
  categories: ICategories[];
  handleUpdateCategories: (categories: ICategories[]) => void;
}

interface ICategoriesContextProps {
  children: ReactNode;
}

export const CategoriesContext = createContext({} as ICategoriesContext);

export function CategoriesContextProvider({
  children,
}: ICategoriesContextProps) {
  const [categories, setCategories] = useState<ICategories[]>([]);

  function handleUpdateCategories(categories: ICategories[]) {
    setCategories(categories);
  }

  return (
    <CategoriesContext.Provider value={{ categories, handleUpdateCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
}
