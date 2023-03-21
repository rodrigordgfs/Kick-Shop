import type { AppProps } from "next/app";
import { Container } from "@/styles/pages/home";
import { globalStyles } from "@/styles/global";
import { Header } from "@/components/Header";
import { CategoriesContextProvider } from "@/contexts/Categories";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CategoriesContextProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CategoriesContextProvider>
  );
}
