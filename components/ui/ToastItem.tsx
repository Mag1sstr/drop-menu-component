import { IToasts, ToastTypes, useToast } from "@/contexts/ToastContext";
import { useEffect } from "react";
import { motion } from "motion/react";

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
  return (
    <motion.div
      initial={{ opacity: 0, translateX: "100%" }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: "100%" }}
      className={`shadow-2xl p-4 ${styles[type] || ""}`}
    >
      {text}
    </motion.div>
  );
}

export default ToastItem;
