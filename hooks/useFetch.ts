import { useEffect, useState } from "react";
interface IParams {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: HeadersInit;
  body?: BodyInit;
}
interface IReturn<T> {
  data: T | null;
  isLoading: boolean;
  isError: string;
}
export const useFetch = <T>(url: string, params?: IParams): IReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url, {
          ...params,
          body: JSON.stringify(params?.body),
        });
        const data = await res.json();
        setData(data);
      } catch (error) {
        setIsError(String(error));
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return { data, isLoading, isError };
};
