import { useContext } from "react";
import Context from "./Context";

const useStore = () => {
  const [todoList, dispatch] = useContext(Context);

  return [todoList, dispatch];
};

export default useStore;
