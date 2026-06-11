import { useState } from "react";

interface IParams {
  url: string;
  method: "POST" | "PUT" | "DELETE";
}

type IReturn<T, B> = [
  fn: (body: B) => void,
  {
    data: T | null;
    isLoading: boolean;
    isError: string;
  },
];
const useMutation = <T, B>({ url, method }: IParams): IReturn<T, B> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const mutate = async (body: B) => {
    try {
      setIsLoading(true);
      const res = await fetch(url, {
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      setData(data);
    } catch (error) {
      setIsError(String(error));
    } finally {
      setIsLoading(false);
    }
  };

  return [mutate, { data, isLoading, isError }];
};

export default useMutation;
