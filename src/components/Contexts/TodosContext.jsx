import React, { useReducer, useCallback } from 'react';
import PropTypes from 'prop-types';

import reducer, { TODO_ADD, TODO_TOGGLE, TODO_HOVER } from './TodosContextReducer';

export const TodosContext = React.createContext();
TodosContext.displayName = 'TodosContext';

const initialState = {
  nextId: 0,
  todos: {},
};

export default function TodosContextWrapper({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getTodos = useCallback(() => Object.keys(state.todos).map(key => ({
    id: key,
    text: state.todos[key].text,
    completed: state.todos[key].completed,
    hover: state.todos[key].hover,
  })));
  const addTodo = useCallback(text => dispatch({ type: TODO_ADD, text }));
  const toggleTodo = useCallback(todoId => dispatch({ type: TODO_TOGGLE, todoId }));
  const hoverTodo = useCallback(todoId => dispatch({ type: TODO_HOVER, todoId }));

  return (
    <TodosContext.Provider value={{
      todos: getTodos(),
      addTodo,
      toggleTodo,
      hoverTodo,
    }}
    >
      {children}
    </TodosContext.Provider>
  );
}

TodosContextWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
