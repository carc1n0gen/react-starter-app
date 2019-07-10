export const ADD_TODO = 'ADD_TODO'
export const addTodo = text => ({
  type: ADD_TODO,
  text
})

export const TOGGLE_TODO = 'TOGGLE_TODO'
export const toggleTodo = todoId => ({
  type: TOGGLE_TODO,
  todoId
})

export const HOVER_TODO = 'HOVER_TODO'
export const hoverTodo = todoId => ({
  type: HOVER_TODO,
  todoId
})

export const SET_LOCALE = 'SET_LOCALE'
export const setLocale = locale => ({
  type: SET_LOCALE,
  locale
})
