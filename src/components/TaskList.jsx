import { Card } from "@mui/material";
import React from "react";
import Task from "./Task";

function TaskList({ tasks, onUpdateTodoItem }) {
  return (
    <Card>
      {tasks.map((task) => (
        <Task key={task.id} todo={task} onChangeTask={onUpdateTodoItem} />
      ))}
    </Card>
  );
}

export default TaskList;
