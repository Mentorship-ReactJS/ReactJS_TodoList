import { Card } from "@mui/material";
import React from "react";
import Task from "./Task";

const TaskList = ({ list }) => {
  return (
    <Card>
      {list.map((ele) => (
        <Task key={ele.id} title={ele.title} />
      ))}
    </Card>
  );
};

export default TaskList;
