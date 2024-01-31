// App.tsx
import React from "react";
import { Box } from "@chakra-ui/react";
import TodoList from '../widgets/TodoList';
import AppBar from "../widgets/AppBar";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const todos: Todo[] = [
  { id: 1, title: "Create Todo App", completed: false },
  { id: 2, title: "Style Todo Components", completed: true },
];

const Home: React.FC = () => {
  return (
    <>
      <AppBar />
      <Box p={4} borderRadius="lg" boxShadow="lg">
        <TodoList todos={todos} />
      </Box>
    </>
  );
};

export default Home;
