// 1. 만든다.
// 2. 사용한다.
// 3. 범위 정해서 내려준다.

import { createContext, useContext, useState } from "react";
import { ToDo } from "../types/toDo.type";

type ToDosContextValueType = {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

const initialValue: ToDosContextValueType = {
  toDos: [],
  setToDos: () => {},
};

const ToDosContext = createContext(initialValue);

export const useToDos = () => useContext(ToDosContext);

interface ToDosProviderProps {
  children: React.ReactNode;
}

export function ToDosProvider({ children }: ToDosProviderProps) {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  return (
    <ToDosContext.Provider value={{ toDos, setToDos }}>
      {children}
    </ToDosContext.Provider>
  );
}
