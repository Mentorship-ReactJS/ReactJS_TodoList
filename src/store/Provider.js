import Context from "./Context";
import { useReducer } from "react";
import reducer, { initialValue } from "./reducer";

const Provider = ({ children }) => {
  const [todoList, dispatch] = useReducer(reducer, initialValue);

  return (
    <Context.Provider value={[todoList, dispatch]}>{children}</Context.Provider>
  );
};

export default Provider;
