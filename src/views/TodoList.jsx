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

  const handleChangeTodoList = useCallback((todo) => {
    setTodoList((prev) => {
      return prev.map((task) => {
        if (task.id === todo.id) {
          return todo;
        }
        return task;
      });
    });
  }, []);

  return (
    <Container maxWidth="sm">
      <AddTask onAddTodoList={handleAddTodoList} />
      <TaskList tasks={todoList} onUpdateTodoItem={handleChangeTodoList} />
    </Container>
  );
}

export default TodoList;
