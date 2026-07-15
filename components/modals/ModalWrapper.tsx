import { createPortal } from "react-dom";
interface IProps {
  open: boolean;
  setOpen: (b: boolean) => void;
  children: React.ReactNode;
}
function ModalWrapper({ open, setOpen, children }: IProps) {
  return createPortal(
    <div
      onMouseDown={() => setOpen(false)}
      className={`fixed inset-0 bg-black/40 z-50 flex items-center justify-center transition-all duration-300  ${open ? "opacity-100 visible [&>div]:mt-0" : "opacity-0 invisible [&>div]:mt-4"} `}
    >
      <div
        className={`transition-all duration-300`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

export default ModalWrapper;
