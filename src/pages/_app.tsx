import type { AppProps } from "next/app";
import { Container } from "@/styles/pages/home";
import { globalStyles } from "@/styles/global";
import { Header } from "@/components/Header";
import { CategoriesContextProvider } from "@/contexts/Categories";
import { SettingsContextProvider } from "@/contexts/Settings";
import { DrawerMenu } from "@/components/DrawerMenu";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SettingsContextProvider>
      <CategoriesContextProvider>
        <Container>
          <DrawerMenu />
          <Header />
          <Component {...pageProps} />
        </Container>
      </CategoriesContextProvider>
    </SettingsContextProvider>
  );
}
