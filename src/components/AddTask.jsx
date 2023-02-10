import { TextField } from "@mui/material";
import { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
const AddTask = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("");

  const generateUUID = () => {
    let d = new Date().getTime;
    let d2 =
      (typeof performance !== "undefined" &&
        performance.now &&
        performance.now() * 1000) ||
      0;
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      let r = Math.random() * 16;
      if (d > 0) {
        r = (d + r) % 16 | 0;
        d = Math.floor(d2 / 16);
      } else {
        r = (d2 + r) % 16 | 0;
        d2 = Math.floor(d2 / 16);
      }
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (title) {
        dispatch({
          type: "add",
          payload: {
            taskId: generateUUID(),
            name: title,
            status: "pendding",
          },
        });
      }
      setTitle("");
    },
    [title, dispatch]
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
