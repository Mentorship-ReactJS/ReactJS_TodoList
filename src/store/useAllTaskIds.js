import useStore from "./useStore";
const useAllTaskId = () => {
  const [taskList] = useStore();

  const allIdTask = taskList.allIds;

  return allIdTask;
};

export default useAllTaskId;
