import { Container } from "@mui/material";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import { useState } from "react";
import { useCallback } from "react";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodoList = useCallback((title) => {
    setTodoList([
      ...todoList,
      {
        id: todoList.length + 1,
        title: title,
        done: false,
      },
    ]);
  }, [todoList]);

  return (
    <Container maxWidth="sm">
      <AddTask onAddTodoList={handleAddTodoList} />
      <TaskList list={todoList} />
    </Container>
  );
};

export default TodoList;
