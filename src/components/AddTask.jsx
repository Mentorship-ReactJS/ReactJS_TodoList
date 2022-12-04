import { TextField } from "@mui/material";

const AddTask = () => {

  return (
    <form>
      <TextField label="Add a new task" variant="outlined" size="small" fullWidth = {true} />
    </form>
  );
};

export default AddTask;
