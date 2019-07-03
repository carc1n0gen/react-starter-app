export const ADD_TODO = 'ADD_TODO'
export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    text
  }
})

export const TOGGLE_TODO = 'TOGGLE_TODO'
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
})

export const HOVER_TODO = 'HOVER_TODO'
export const hoverTodo = id => ({
  type: HOVER_TODO,
  payload: {
    id
  }
})

export const SET_LOCALE = 'SET_LOCALE'
export const setLocale = locale => ({
  type: SET_LOCALE,
  payload: {
    locale
  }
})
