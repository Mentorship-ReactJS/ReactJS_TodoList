import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const useTask = (taskId) => {
  const taskList = useSelector((state) => state.byId);
  const dispatch = useDispatch();
  const task = taskList[taskId];

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
