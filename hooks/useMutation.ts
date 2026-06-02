import { url } from "inspector";
import { useState } from "react";

interface IParams<T> {
  url: string;
  method: "POST" | "PUT" | "DELETE";
  body?: BodyInit | T;
}

type IReturn<T, B> = [
  fn: (body: B) => void,
  {
    data: T | null;
    isLoading: boolean;
    isError: string;
  },
];
const useMutation = <T, B>({
  url,
  method,
  body,
}: IParams<B>): IReturn<T, B> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const mutate = async () => {
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
