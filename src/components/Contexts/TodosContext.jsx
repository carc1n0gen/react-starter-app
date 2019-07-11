import React from 'react'

import reducer, { TODO_ADD, TODO_TOGGLE, TODO_HOVER } from './TodosContextReducer'

const TodosContext = React.createContext()
TodosContext.displayName = 'TodosContext'

const initialState = {
  nextId: 0,
  todos: {}
}

export default function TodosContextWrapper({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  function getTodos() {
    return Object.keys(state.todos).map((key) => ({
      id: key,
      text: state.todos[key].text,
      completed: state.todos[key].completed,
      hover: state.todos[key].hover
    }))
  }

  function addTodo(text) {
    dispatch({ type: TODO_ADD, text })
  }

  function toggleTodo(todoId) {
    dispatch({ type: TODO_TOGGLE, todoId })
  }

  function hoverTodo(todoId) {
    dispatch({ type: TODO_HOVER, todoId })
  }

  return (
    <TodosContext.Provider value={{ 
      todos: getTodos(),
      addTodo,
      toggleTodo,
      hoverTodo
    }}>
      {children}
    </TodosContext.Provider>
  )
}

export function withTodos(Component) {
  return function TodosContextInjector(props) {
    return (
      <TodosContext.Consumer>
        {context => <Component {...props} todosContext={context} />}
      </TodosContext.Consumer>
    )
  }
}
