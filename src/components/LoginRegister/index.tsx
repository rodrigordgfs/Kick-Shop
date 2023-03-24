import { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";
import { AiOutlineClose } from "react-icons/ai";
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  TabsLoginRegisterContent,
  TabsLoginRegisterHeader,
  TabsLoginRegisterHeaderItem,
} from "@/styles/components/loginRegister";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

interface LoginRegisterProps {
  children: ReactNode;
}

export function LoginRegister({ children }: LoginRegisterProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose>
            <AiOutlineClose size={24} />
          </DialogClose>
          <Tabs.Root defaultValue="login">
            <TabsLoginRegisterHeader>
              <TabsLoginRegisterHeaderItem value="login">
                Login
              </TabsLoginRegisterHeaderItem>
              <TabsLoginRegisterHeaderItem value="register">
                Register
              </TabsLoginRegisterHeaderItem>
            </TabsLoginRegisterHeader>
            <TabsLoginRegisterContent value="login">
              <Login />
            </TabsLoginRegisterContent>
            <TabsLoginRegisterContent value="register">
              <Register />
            </TabsLoginRegisterContent>
          </Tabs.Root>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
