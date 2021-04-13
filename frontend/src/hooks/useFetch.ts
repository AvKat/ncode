import { useEffect, useState } from "react";
import axios from "axios";
import useStateCallback from "./useStateCallback";

const useFetch = (url: string) => {
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useStateCallback(false);

  useEffect(() => {
    setLoading(true, () => {
      axios.get(url).then((json) => {
        setResponse(json.data);
        setLoading(false);
      });
    });
  }, [url, setLoading]);

  return { response, loading };
};

export default useFetch;
