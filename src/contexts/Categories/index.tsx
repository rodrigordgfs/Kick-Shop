import { ICategorie } from "@/interfaces/ICategories";
import { ReactNode, createContext, useState } from "react";

interface ICategoriesContext {
  categories: ICategorie[];
  handleUpdateCategories: (categories: ICategorie[]) => void;
}

interface ICategoriesContextProps {
  children: ReactNode;
}

export const CategoriesContext = createContext({} as ICategoriesContext);

export function CategoriesContextProvider({
  children,
}: ICategoriesContextProps) {
  const [categories, setCategories] = useState<ICategorie[]>([]);

  function handleUpdateCategories(categories: ICategorie[]) {
    setCategories(categories);
  }

  return (
    <CategoriesContext.Provider value={{ categories, handleUpdateCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
}
