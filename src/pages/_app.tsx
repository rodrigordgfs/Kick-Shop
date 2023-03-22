import type { AppProps } from "next/app";
import { Container } from "@/styles/pages/Home";
import { globalStyles } from "@/styles/global";
import { Header } from "@/components/Header";
import { CategoriesContextProvider } from "@/contexts/Categories";
import { SettingsContextProvider } from "@/contexts/Settings";
import { DrawerMenu } from "@/components/Header/components/DrawerMenu";
import { ProductsContextProvider } from "@/contexts/Products";
import { Footer } from "@/components/Footer";
import { DrawerFilterProduct } from "@/components/Shop/ProductsList/components/DrawerFilterProduct";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SettingsContextProvider>
      <ProductsContextProvider>
        <CategoriesContextProvider>
          <Container>
            <DrawerMenu />
            <DrawerFilterProduct />
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Container>
        </CategoriesContextProvider>
      </ProductsContextProvider>
    </SettingsContextProvider>
  );
}
