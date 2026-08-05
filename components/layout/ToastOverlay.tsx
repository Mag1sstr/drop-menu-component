import { IToasts, ToastTypes } from "@/contexts/ToastContext";
import { createPortal } from "react-dom";
import ToastItem from "../ui/ToastItem";
interface IProps {
  toasts: IToasts[];
}

function ToastOverlay({ toasts }: IProps) {
  return createPortal(
    <div className="fixed inset-0 flex justify-end z-50 pointer-events-none">
      <div className="w-50 flex flex-col gap-3">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} {...toast} />
        ))}
      </div>
    </div>,
    document.body,
  );
}

export default ToastOverlay;
