import { ReactNode, createContext, useState } from "react";

interface ISettingsContext {
  isDrawerOpen: boolean;
  toogleDrawer: () => void;
}

interface ISettingsContextProps {
  children: ReactNode;
}

export const SettingsContext = createContext({} as ISettingsContext);

export function SettingsContextProvider({ children }: ISettingsContextProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  function toogleDrawer() {
    setIsDrawerOpen((prevState) => !prevState);
  }

  return (
    <SettingsContext.Provider value={{ isDrawerOpen, toogleDrawer }}>
      {children}
    </SettingsContext.Provider>
  );
}
