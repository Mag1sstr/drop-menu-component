export const useGetToken = <T>(name: string) => {
  if (typeof window === "undefined") return;
  const res = localStorage.getItem(name);
  return res ? (res as T) : null;
};
