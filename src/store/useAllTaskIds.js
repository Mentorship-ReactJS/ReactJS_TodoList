import { useSelector } from "react-redux";
const useAllTaskId = () => {
  const taskList = useSelector((state) => state.allIds);

  return taskList;
};

export default useAllTaskId;
