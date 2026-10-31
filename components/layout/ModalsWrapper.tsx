"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
interface IProps {
  children: React.ReactNode;
}
function ModalsWrapper({ children }: IProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return createPortal(<div>{children}</div>, document.body);
}

export default ModalsWrapper;
