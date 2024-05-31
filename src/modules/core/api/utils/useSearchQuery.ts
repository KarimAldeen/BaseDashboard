import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function useSearchQuery(paramName: string): [string, (value: string) => void] {
  const location = useLocation();
  const [queryValue, setQueryValue] = useState<string>("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setQueryValue(searchParams.get(paramName) || "");
  }, [location, paramName]);

  return [queryValue, setQueryValue];
}

export default useSearchQuery;
