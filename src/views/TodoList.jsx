import { Container } from "@mui/material";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import { useState } from "react";

const TodoList = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "don nha", done: false },
    { id: 2, title: "don giuong", done: false },
    { id: 3, title: "quet nha", done: false },
  ]);

  return (
    <Container maxWidth="sm">
      <AddTask />
      <TaskList tasks={todoList} />
    </Container>
  );
};

export default TodoList;
