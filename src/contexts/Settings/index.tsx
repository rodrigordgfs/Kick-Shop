import { ReactNode, createContext, useState } from "react";

interface ISettingsContext {
  isDrawerMenuOpen: boolean;
  isDrawerFilterProductOpen: boolean;
  toogleDrawerMenu: () => void;
  toogleDrawerFilterProduct: () => void;
}

interface ISettingsContextProps {
  children: ReactNode;
}

export const SettingsContext = createContext({} as ISettingsContext);

export function SettingsContextProvider({ children }: ISettingsContextProps) {
  const [isDrawerMenuOpen, setIsDrawerMenuOpen] = useState<boolean>(false);
  const [isDrawerFilterProductOpen, setIsDrawerFilterProductOpen] =
    useState<boolean>(false);

  function toogleDrawerMenu() {
    setIsDrawerMenuOpen((prevState) => !prevState);
  }

  function toogleDrawerFilterProduct() {
    setIsDrawerFilterProductOpen((prevState) => !prevState);
  }

  return (
    <SettingsContext.Provider
      value={{
        isDrawerMenuOpen,
        isDrawerFilterProductOpen,
        toogleDrawerMenu,
        toogleDrawerFilterProduct,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
