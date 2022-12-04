import { TextField } from "@mui/material";
import { useState } from "react";

const AddTask = ({ onAddTodoList }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodoList(title);
    setTitle("");
  };

  console.log(title);

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
