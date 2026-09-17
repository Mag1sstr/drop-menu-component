import { EntryType } from "perf_hooks";
import { useEffect, useRef, useState } from "react";

export const useIntersection = (options: IntersectionObserverInit) => {
  const [intersecting, setIntersecting] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);
    observer.observe(el);

    return () => observer.disconnect();
  }, [options.root, options.threshold, options.rootMargin]);

  return [ref, intersecting] as const;
};
