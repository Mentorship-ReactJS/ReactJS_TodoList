import { Container } from "@mui/material";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import Statusbar from "../components/StatusBar";

const TodoList = () => {
  return (
    <Container maxWidth="sm">
      <AddTask />
      <Statusbar />
      <TaskList />
    </Container>
  );
};

export default TodoList;
