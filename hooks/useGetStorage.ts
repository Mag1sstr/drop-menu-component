export const useGetStorage = <T>(name: string) => {
  if (typeof window === "undefined") return;
  const res = localStorage.getItem(name);
  return res ? (JSON.parse(res) as T) : null;
};
