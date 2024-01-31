import React from "react";
import { Box, Checkbox, Text, Flex } from "@chakra-ui/react";

interface TodoItemProps {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <Box>
      <Flex justify="start" align="center">
        <Checkbox defaultChecked={todo.completed} />
        <Text ml={2} textDecoration={todo.completed ? "line-through" : "none"}>
          {todo.title}
        </Text>
      </Flex>
    </Box>
  );
};

export default TodoItem;
