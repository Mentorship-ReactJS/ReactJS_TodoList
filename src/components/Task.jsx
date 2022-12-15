import {
  Box,
  CardContent,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { useCallback } from "react";

function Task({ todo, onDelete }) {
  const [done, setDone] = useState(false);

  const onDeleteTask = useCallback(() => {
    onDelete(todo.id);
  }, [todo, onDelete]);

  return (
    <CardContent
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
        <Checkbox onChange={() => setDone(!done)} />
        <Typography variant="h5" sx={{ textTransform: "capitalize" }}>
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
        <IconButton>
          <ModeEditIcon />
        </IconButton>
      </Box>
    </CardContent>
  );
}

export default Task;
