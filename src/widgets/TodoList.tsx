import React from "react";
import { VStack } from "@chakra-ui/react";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <VStack align="stretch" spacing={4}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </VStack>
  );
};

export default TodoList;
