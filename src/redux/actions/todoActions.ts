// src/redux/actions/todoActions.ts
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actionTypes";

interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export const addTodo = (todo: Todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = (id: string) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const toggleTodo = (id: string) => ({
  type: TOGGLE_TODO,
  payload: id,
});
