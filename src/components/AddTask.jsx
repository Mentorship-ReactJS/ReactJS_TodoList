import { TextField } from "@mui/material";
import { memo, useCallback, useState } from "react";
import useStore from "./../store/customHook";

const AddTask = () => {
  const [todoList, dispatch] = useStore();
  const [title, setTitle] = useState("");
  const [taskId, setTaskId] = useState(0);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (title) {
        dispatch({
          type: "add",
          payload: {
            taskId,
            name: title,
            status: "pendding",
          },
        });
        setTaskId(taskId + 1);
      }
      setTitle("");
    },
    [title, dispatch, taskId]
  );

  const handleChangeInput = useCallback((e) => {
    const value = e.target.value;
    setTitle(value.trim());
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        onChange={handleChangeInput}
        value={title}
        label="Add a new task"
        variant="outlined"
        size="small"
        fullWidth={true}
      />
    </form>
  );
};

export default memo(AddTask);
