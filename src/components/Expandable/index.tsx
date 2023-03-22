import * as Accordion from "@radix-ui/react-accordion";
import { AiOutlineDown } from "react-icons/ai";
import { ReactNode } from "react";
import {
  ExpandableContent,
  ExpandableHeader,
} from "@/styles/components/expandable";

interface ExpandableProps {
  title: string;
  children: ReactNode;
}

export function Expandable({ title, children }: ExpandableProps) {
  return (
    <Accordion.Root type="single">
      <Accordion.Item value="item-1">
        <Accordion.Header>
          <ExpandableHeader>
            <p>{title}</p>
            <AiOutlineDown size={18} aria-hidden />
          </ExpandableHeader>
        </Accordion.Header>
        <ExpandableContent>{children}</ExpandableContent>
      </Accordion.Item>
    </Accordion.Root>
  );
}
