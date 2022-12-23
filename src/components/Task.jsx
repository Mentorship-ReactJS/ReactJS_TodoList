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
import { memo, useCallback, useState } from "react";
import useStore from "./../store/customHook";

const Task = ({ taskId }) => {
  const [taskList, dispatch] = useStore();

  const task = taskList.byId[taskId];

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.name);

  const maskAsDone = useCallback(() => {
    dispatch({ type: "completed", taskId: task.id });
  }, [task, dispatch]);

  const onDeleteTask = useCallback(() => {
    dispatch({ type: "delete", taskId: task.id });
  }, [task, dispatch]);

  const setEditStatus = useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing]);

  const hanldeSaveChanged = useCallback(() => {
    if (newTitle) {
      dispatch({
        type: "edit",
        payload: { taskId: task.id, name: newTitle },
      });
      setEditStatus();
    }
  }, [task, dispatch, newTitle, setEditStatus]);

  const hanldeCancleChanged = useCallback(() => {
    setNewTitle(task.name);
    setEditStatus();
  }, [task, setEditStatus]);

  const handleInputChanged = useCallback((e) => {
    setNewTitle(e.target.value);
  }, []);
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
