import { Card } from "@mui/material";
import React, { memo } from "react";
import Task from "./Task";
import useStore from "./../store/customHook";

const TaskList = () => {
  const [todoList] = useStore();

  return (
    <Card>
      {todoList.allIds?.map((taskId) => {
        return <Task key={taskId} taskId={taskId} />;
      })}
    </Card>
  );
};

export default memo(TaskList);
