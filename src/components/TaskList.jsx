import { Card } from "@mui/material";
import React from "react";
import Task from "./Task";

function TaskList({ tasks, onChangeTodoList  }) {

  return (
    <Card>
      {tasks.map((task) => (
        <Task key={task.id} todo={task} onChangeTodo = {onChangeTodoList} />
      ))}
    </Card>
  );
}

export default TaskList;
