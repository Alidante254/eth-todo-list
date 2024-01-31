import { Flex, Box, Text, Button } from "@chakra-ui/react";

const AppBar: React.FC = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      paddingX={4}
      paddingY={2}
      bg="blue.500"
      color="white"
    >
      <Text fontSize="lg" fontWeight="bold">
       Todo List App
      </Text>

      <Box>
        <Button variant="ghost" mr={2}>
          Home
        </Button>
        <Button variant="ghost">About</Button>
      </Box>
    </Flex>
  );
};

export default AppBar;
