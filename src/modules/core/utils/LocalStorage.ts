import { useEffect } from "react";

export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key) ?? "{}";
  return JSON.parse(data);
};

export const setLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, data);
};
