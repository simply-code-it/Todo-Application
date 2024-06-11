import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { addTodo, toggleTodo, removeTodo } from "../redux/actions/todoActions";
import {
  Box,
  Heading,
  Input,
  Button,
  List,
  ListItem,
  Text,
  Checkbox,
  IconButton,
  FormControl,
  FormLabel,
  Spacer,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      description,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <Heading m={"10"}>Add Todo</Heading>
      <form
        style={{
          width: "90%",
          margin: "auto",
          marginBottom: "40px",
        }}
        onSubmit={handleAddTodo}
      >
        <FormControl w={"100%"} m='10px'>
          <FormLabel fontSize="30px">Title</FormLabel>
          <Input
            backgroundColor={"lightblue"}
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>

        <FormControl w={"100%"} m='10px'>
          <FormLabel fontSize="30px">Description</FormLabel>
          <Input
            backgroundColor={"lightblue"}
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>

        <Button m='10px' colorScheme="blue" type="submit">
          Add Todo
        </Button>
      </form>
      <Box>
        <List spacing={3} w={"90%"} m="auto">
          <Heading>List of Todos</Heading>
          {todos.map((todo) => (
            <ListItem
              backgroundColor={"papayawhip"}
              p="15px"
              borderRadius={"10px"}
              key={todo.id}
              display="flex"
              alignItems="center"
              justifyContent={"center"}
              justifyItems={"center"}
            >
              <Box flex="2">
                <Heading as="h2" size="md">
                  {todo.title}
                </Heading>
                <Text>{todo.description}</Text>
              </Box>
              <Spacer />
              <Checkbox
                flex="1"
                isChecked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                colorScheme="teal"
              >
                {todo.completed ? "Completed" : "Incomplete"}
              </Checkbox>
              <IconButton
                flex="1"
                ml="2"
                aria-label="Delete"
                icon={<DeleteIcon />}
                colorScheme="red"
                onClick={() => dispatch(removeTodo(todo.id))}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default TodoList;
