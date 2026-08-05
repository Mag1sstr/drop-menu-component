import { IToasts, ToastTypes } from "@/contexts/ToastContext";
import { createPortal } from "react-dom";
interface IProps {
  toasts: IToasts[];
}

function ToastOverlay({ toasts }: IProps) {
  const styles: Record<ToastTypes, string> = {
    error: "bg-red-500",
    success: "bg-green-500",
  };
  return createPortal(
    <div className="fixed inset-0 flex justify-end">
      <div className="w-50 flex flex-col gap-3">
        {toasts.map(({ text, type }) => (
          <div className={`bg-white shadow-2xl p-4 ${styles[type] || ""}`}>
            {text}
          </div>
        ))}
      </div>
    </div>,
    document.body,
  );
}

export default ToastOverlay;
