import { PageBannerContainer } from "@/styles/components/pageBanner";
import { ReactNode } from "react";

interface IPageBannerProps {
  children: ReactNode;
}

export function PageBanner({ children }: IPageBannerProps) {
  return <PageBannerContainer>{children}</PageBannerContainer>;
}
