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
import { useState } from "react";

function Task({ todo, onChangeTodo }) {
  const [done, setDone] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <CardContent>
      {isEdit ? (
        <Box>
          <TextField
            value={todo.title}
            onChange={(e) => {
              onChangeTodo({ ...todo, title: e.target.value });
            }}
          />
          <Button variant="onlined" onClick={() => setIsEdit(false)}>
            Save
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
            <Checkbox onChange={() => setDone(!done)} />
            <Typography variant="h5">{todo.title}</Typography>
          </Box>
          <Box>
            <IconButton aria-label="Example">
              <MoreVertIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => setIsEdit(true)}>
              <ModeEditIcon />
            </IconButton>
          </Box>
        </Box>
      )}
    </CardContent>
  );
}

export default Task;
