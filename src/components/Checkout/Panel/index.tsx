import {
  PanelContainer,
  PanelContent,
  PanelHeader,
} from "@/styles/pages/Checkout/components/panel";
import { ReactNode } from "react";

interface PanelProps {
  children: ReactNode;
  title: string;
}

export function Panel({ children, title }: PanelProps) {
  return (
    <PanelContainer>
      <PanelHeader>{title}</PanelHeader>
      <PanelContent>{children}</PanelContent>
    </PanelContainer>
  );
}
