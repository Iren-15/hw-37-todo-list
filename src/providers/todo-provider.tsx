import { ReactNode, createContext, useState } from "react";

interface ITodoContext {
  arrayTodo: string[];
  setArrayTodo: (arreyTodo: string[]) => void;
}

export const TodoContext = createContext<ITodoContext>({
  arrayTodo: [],
  setArrayTodo: () => {},
});

interface ITodoProvider {
  children: ReactNode;
}

export const TodoProvider = ({ children }: ITodoProvider) => {
  let [arrayTodo, setArrayTodo] = useState([]);

  return (
    <TodoContext.Provider value={{ arrayTodo, setArrayTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
