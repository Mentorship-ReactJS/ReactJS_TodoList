import { Container } from "@mui/material";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import { useState, useCallback } from "react";
import Statusbar from "../components/StatusBar";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [fitterStatus, setFitterStatus] = useState("all");

  const handleAddTodoList = useCallback(
    (title) => {
      setTodoList([
        ...todoList,
        {
          id: todoList.length + 1,
          title: title,
          done: false,
        },
      ]);
    },
    [todoList]
  );

  const fitterTodoList = todoList.filter((task) => {
    if (fitterStatus === "all") {
      return true;
    } else if (fitterStatus === "completed") {
      return task.done === true;
    }
    return task.done === false;
  });

  const handleChangFitterStatus = useCallback((status) => {
    setFitterStatus(status);
  }, []);

  return (
    <Container maxWidth="sm">
      <AddTask onAddTodoList={handleAddTodoList} />
      <Statusbar onChangeStatus={handleChangFitterStatus} />
      <TaskList tasks={fitterTodoList} />
    </Container>
  );
}

export default TodoList;
