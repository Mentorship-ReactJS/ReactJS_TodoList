import { Card } from "@mui/material";
import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTodoList }) {


  return (
    <Card>
      {tasks.map((task) => (
        <Task key={task.id} todo={task} onDelete = {onDeleteTodoList} />
      ))}
    </Card>
  );
}

export default TaskList;
