import { useEffect, useState } from "react";

export default function usePersistantState<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  const [state, setInternalState] = useState<T>(initialValue);

  useEffect(() => {
    const value = localStorage.getItem(key);
    if (value) {
      setInternalState(JSON.parse(value));
    }
  }, [key]);

  const setState = (value: T | ((prev: T) => T)) => {
    setInternalState((prevState) => {
      const valueToStore = value instanceof Function ? value(prevState) : value;
      localStorage.setItem(key, JSON.stringify(valueToStore));
      return valueToStore;
    });
  };

  return [state, setState];
}
