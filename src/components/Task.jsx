import {
  Box,
  Button,
  CardContent,
  Checkbox,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { memo } from "react";
import useTask from "../store/useTask";

const Task = ({ taskId }) => {
  const {
    task,
    isEditing,
    newTitle,
    setEditStatus,
    maskAsDone,
    onDeleteTask,
    hanldeSaveChanged,
    hanldeCancleChanged,
    handleInputChanged,
  } = useTask(taskId);


  return (
    <CardContent>
      {isEditing ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField value={newTitle} onChange={handleInputChanged} />
          <Button
            variant="contained"
            color="success"
            onClick={hanldeSaveChanged}
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={hanldeCancleChanged}
          >
            Cancel
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 15,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Checkbox checked={task.done} onChange={maskAsDone} />
            <Typography
              variant="h5"
              sx={{
                textTransform: "capitalize",
                textDecoration: task?.done && "line-through",
              }}
            >
              {task.name}
            </Typography>
          </Box>
          <Box>
            <IconButton aria-label="Example">
              <MoreVertIcon />
            </IconButton>
            <IconButton onClick={onDeleteTask}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={setEditStatus}>
              <ModeEditIcon />
            </IconButton>
          </Box>
        </Box>
      )}
    </CardContent>
  );
};

export default memo(Task);
