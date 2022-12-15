import { Card } from "@mui/material";
import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTodoItem }) {


  return (
    <Card>
      {tasks.map((task) => (
        <Task key={task.id} todo={task} onDelete = {onDeleteTodoItem} />
      ))}
    </Card>
  );
}

export default TaskList;
