import { TextField } from "@mui/material";
import { useCallback, useState } from "react";

const AddTask = ({ onAddTodoList }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onAddTodoList(title);
    setTitle("");
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        label="Add a new task"
        variant="outlined"
        size="small"
        fullWidth={true}
      />
    </form>
  );
};

export default AddTask;
