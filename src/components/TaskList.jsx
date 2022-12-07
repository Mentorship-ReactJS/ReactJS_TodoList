import { Card } from "@mui/material";
import React from "react";
import Task from "./Task";


function TaskList() {
  return (
    <Card>
      {tasks.map((task) => (
        <Task key={task.id} title={task.title} />
      ))}
    </Card>
  );
}

export default TaskList;
