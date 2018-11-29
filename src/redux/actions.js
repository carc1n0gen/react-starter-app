import { ADD_TODO, TOGGLE_TODO, HOVER_TODO, SET_LOCALE } from "./actionTypes"

let nextTodoId = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    text
  }
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
})

export const hoverTodo = id => ({
  type: HOVER_TODO,
  payload: {
    id
  }
})

export const setLocale = locale => ({
  type: SET_LOCALE,
  payload: {
    locale
  }
})