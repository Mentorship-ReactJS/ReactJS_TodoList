import { Card } from "@mui/material";
import React, { memo } from "react";
import Task from "./Task";
import useAllTaskId from "./../store/useAllTaskIds";

const TaskList = () => {
  const allIds = useAllTaskId();
  console.log("task list", allIds);

  return (
    <Card>
      {allIds?.map((taskId) => {
        return <Task key={taskId} taskId={taskId} />;
      })}
    </Card>
  );
};

export default memo(TaskList);
