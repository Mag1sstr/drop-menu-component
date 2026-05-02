export const getLocalStorageValue = <T>(v: string) => {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(v);
  return value ? (JSON.parse(value) as T) : null;
};
