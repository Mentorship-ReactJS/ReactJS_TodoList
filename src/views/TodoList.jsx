import { Container } from "@mui/material";
import AddTask from "../components/AddTask";
import TaskList from "./TaskList";

const TodoList = () => {
  return (
    <Container maxWidth="sm">
      <AddTask />
      <TaskList />
    </Container>
  );
};

export default TodoList;
