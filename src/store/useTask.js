import { useCallback, useState } from "react";
import useStore from "./useStore";
const useTask = (taskId) => {
  const [taskList, dispatch] = useStore();

  const task = taskList.byId[taskId];

  console.log(task);

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.name);

  const maskAsDone = useCallback(() => {
    dispatch({ type: "completed", taskId });
  }, [dispatch, taskId]);

  const onDeleteTask = useCallback(() => {
    dispatch({ type: "delete", taskId });
  }, [dispatch, taskId]);

  const setEditStatus = useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing]);

  const hanldeSaveChanged = useCallback(() => {
    if (newTitle) {
      dispatch({
        type: "edit",
        payload: { taskId, name: newTitle },
      });
      setEditStatus();
    }
  }, [taskId, dispatch, newTitle, setEditStatus]);

  const hanldeCancleChanged = useCallback(() => {
    setNewTitle(task.name);
    setEditStatus();
  }, [task, setEditStatus]);

  const handleInputChanged = useCallback((e) => {
    setNewTitle(e.target.value);
  }, []);

  return {
    task,
    isEditing,
    newTitle,
    setEditStatus,
    maskAsDone,
    onDeleteTask,
    hanldeSaveChanged,
    hanldeCancleChanged,
    handleInputChanged,
  };
};

export default useTask;
