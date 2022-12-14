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
import { useCallback } from "react";

function Task({ todo, onChangeTask }) {
  const [done, setDone] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const setEditStatus = useCallback(() => {
    setIsEdit(!isEdit);
  }, [isEdit]);
  const onChangeTextBox = useCallback((e) => {
    onChangeTask({ ...todo, title: e.target.value });
  }, [todo, onChangeTask])
  return (
    <CardContent>
      {isEdit ? (
        <Box>
          <TextField
            value={todo.title}
            onChange={onChangeTextBox}
          />
          <Button variant="onlined" onClick={setEditStatus}>
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
