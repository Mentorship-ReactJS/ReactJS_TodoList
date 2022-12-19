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
import { useCallback, useState } from "react";

function Task({ todo, onCompletedTask, onDelete, onTaskChanged }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const maskAsDone = useCallback(() => {
    onCompletedTask(todo?.id);
  }, [todo, onCompletedTask]);

  const onDeleteTask = useCallback(() => {
    onDelete(todo.id);
  }, [todo, onDelete]);

  const setEditStatus = useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing]);

  const hanldeSaveChanged = useCallback(() => {
    onTaskChanged(todo.id, newTitle);
    setEditStatus();
  }, [todo, onTaskChanged, newTitle, setEditStatus]);

  const hanldeCancleChanged = useCallback(() => {
    setNewTitle(todo.title);
    setEditStatus();
  }, [todo, setEditStatus]);

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
            <Checkbox checked={todo.done} onChange={maskAsDone} />
            <Typography
              variant="h5"
              sx={{
                textTransform: "capitalize",
                textDecoration: todo?.done && "line-through",
              }}
            >
              {todo.title}
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
}

export default Task;
