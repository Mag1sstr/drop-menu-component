"use client";
import { IToasts, ToastTypes } from "@/contexts/ToastContext";
import { createPortal } from "react-dom";
import ToastItem from "../ui/ToastItem";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
interface IProps {
  toasts: IToasts[];
}

function ToastOverlay({ toasts }: IProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    setInit(true);
  }, []);

  if (!init) return null;
  return createPortal(
    <div className="fixed inset-0 flex justify-end z-50 pointer-events-none p-3">
      <div className="w-70 flex flex-col gap-3">
        <AnimatePresence>
          {toasts.map((toast) => (
            <ToastItem key={toast.id} {...toast} />
          ))}
        </AnimatePresence>
      </div>
    </div>,
    document.body,
  );
}

export default ToastOverlay;
