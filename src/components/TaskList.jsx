import { Card } from "@mui/material";
import React from "react";
import Task from "./Task";

function TaskList({ tasks, onCompleted }) {

  return (
    <Card>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onCompletedTask={onCompleted} />
      ))}
    </Card>
  );
}

export default TaskList;
