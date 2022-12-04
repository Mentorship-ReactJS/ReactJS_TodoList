import { Card } from "@mui/material";
import React from "react";
import Task from "./Task";

const TaskList = () => {
  return (
    <Card>
      <Task />
      <Task />
      <Task />
      <Task />
    </Card>
  );
};

export default TaskList;
