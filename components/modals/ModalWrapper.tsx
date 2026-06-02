import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface IProps {
  children: ReactNode;
  setOpen: (b: boolean) => void;
  open: boolean;
}
function ModalWrapper({ open, setOpen, children }: IProps) {
  return createPortal(
    <div
      onMouseDown={() => setOpen(false)}
      className={`fixed z-50 inset-0 bg-black/70 flex items-center justify-center transition-all ${open ? "visible opacity-100 mt-0" : "invisible opacity-0 mt-5"}`}
    >
      <div onMouseDown={(e) => e.stopPropagation()}>{children}</div>
    </div>,
    document.body,
  );
}

export default ModalWrapper;
