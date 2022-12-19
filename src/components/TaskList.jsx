import { Card } from "@mui/material";
import React, { memo } from "react";
import Task from "./Task";

const TaskList = ({
  tasks,
  onDeleteTodoItem,
  onCompleted,
  onUpdateTodoItem,
}) => {
  return (
    <Card>
      {tasks?.map((task) => (
        <Task
          key={task.id}
          todo={task}
          onDelete={onDeleteTodoItem}
          onCompletedTask={onCompleted}
          onTaskChanged={onUpdateTodoItem}
        />
      ))}
    </Card>
  );
};

export default memo(TaskList);
