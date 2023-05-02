import { useEffect, useState } from "react";
export default function useLocalStorage(key: string, initialValue: string) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      }
    } catch (error) {
      return initialValue;
    }
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const valueToStore =
          typeof storedValue === "function"
            ? storedValue(storedValue)
            : storedValue;
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
      }
    }
  }, [key, storedValue]);
  return [storedValue, setStoredValue];
}