import { Ref, RefObject, useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLDivElement | null>,
  fn: () => void,
) => {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        fn();
      }
    }
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [fn, ref]);
};
