import { useEffect, useMemo, useRef } from "react";

export const useDebounce = (callback) => {
  const debounce = (func, wait) => {
    let timeout;

    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };
  
  const ref = useRef();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, 500);
  }, []);

  return debouncedCallback;
};
