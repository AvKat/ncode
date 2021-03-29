import { useEffect, useState } from "react";
import useStateCallback from "./useStateCallback";

const useFetch = (url: string) => {
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useStateCallback(false);

  useEffect(() => {
    setLoading(true, () => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setResponse(json);
          setLoading(false);
        });
    });
  }, [url, setLoading]);

  return { response, loading };
};

export default useFetch;
