// src/redux/reducers/todoReducer.ts
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actionTypes';

interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

const initialState: Todo[] = [];

const todoReducer = (state = initialState, action:any): Todo[] => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todoReducer;
