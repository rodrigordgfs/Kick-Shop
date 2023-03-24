import { styled } from "@/styles";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";

export const DialogOverlay = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.75)",
});

export const DialogContent = styled(Dialog.Content, {
  maxWidth: "512px",
  width: "100%",
  borderRadius: "8px",
  padding: "32px",
  backgroundColor: "$white",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

export const DialogClose = styled(Dialog.Close, {
  position: "absolute",
  background: "transparent",
  border: 0,
  top: "24px",
  right: "24px",
  cursor: "pointer",
  color: "$primary",
});

export const TabsLoginRegisterHeader = styled(Tabs.List, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const TabsLoginRegisterHeaderItem = styled(Tabs.Trigger, {
  background: "transparent",
  border: 0,
  padding: "16px 32px",
  cursor: "pointer",
  fontSize: "16px",
  color: "$zinc-500",

  "&[data-state='active']": {
    borderBottom: "2px solid $primary",
    color: "$zinc-900",
  },
});

export const TabsLoginRegisterContent = styled(Tabs.Content, {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});
