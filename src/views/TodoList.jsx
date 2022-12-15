import { Container } from "@mui/material";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import { useState, useCallback } from "react";

function TodoList() {
  const [todoList, setTodoList] = useState([]);

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

  const handleDeleteTodoList = useCallback((id) => {
    setTodoList((prev) => {
      return prev.filter((task) => task.id !== id);
    });
  }, []);

  return (
    <Container maxWidth="sm">
      <AddTask onAddTodoList={handleAddTodoList} />
      <TaskList tasks={todoList} onDeleteTodoItem={handleDeleteTodoList} />
    </Container>
  );
}

export default TodoList;
