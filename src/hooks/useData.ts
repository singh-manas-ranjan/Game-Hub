import { useState, useEffect } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";
import { HttpService } from "../services/HttpService";

interface FetchResponse<T>{
  count: number,
  results: T[]
}


const useData = <T,T1 extends HttpService>(service : T1, requestConfig? : AxiosRequestConfig, deps? : any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const { request, cancel } = service.getAll<FetchResponse<T>>(requestConfig);
    request
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => cancel();
  }, deps? [...deps] : []);

  return { data, setData, error, setError, isLoading };
};

export default useData;
