import { IToasts, ToastTypes, useToast } from "@/contexts/ToastContext";
import { useEffect } from "react";

function ToastItem({ text, type, id }: IToasts) {
  const { setToasts } = useToast();
  const styles: Record<ToastTypes, string> = {
    error: "bg-red-500",
    success: "bg-green-500",
  };

  useEffect(() => {
    const timer = setTimeout(
      () => setToasts((prev) => prev.filter((el) => el.id !== id)),
      3000,
    );
    return () => clearTimeout(timer);
  }, []);
  return <div className={`shadow-2xl p-4 ${styles[type] || ""}`}>{text}</div>;
}

export default ToastItem;
