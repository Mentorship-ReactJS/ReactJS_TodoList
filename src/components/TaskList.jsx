import { Card } from "@mui/material";
import React from "react";
import Task from "./Task";


function TaskList() {
  return (
    <Card>
      <Task />
      <Task />
      <Task />
      <Task />
    </Card>
  );
}

export default TaskList;
