import { ADD_TODO, TOGGLE_TODO, HOVER_TODO } from "../actionTypes"

const initialState = {
  nextId: 0,
  todos: {}
}

// Ever wondered what immutable object manipulation looks like without using
// a library like immutableJS? Well here ya go in all its terrible glory!

const addTodo = (state, payload) => ({
  nextId: state.nextId + 1,
  todos: {
    ...state.todos,
    [state.nextId]: {
      text: payload.text,
      completed: false,
      hover: false
    }
  }
})

const toggleTodo = (state, payload) => ({
  ...state,
  todos: {
    ...state.todos,
    [payload.id]: {
      ...state.todos[payload.id],
      completed: !state.todos[payload.id].completed,
      hover: false
    }
  }
})

const hoverTodo = (state, payload) => ({
  ...state,
  todos: {
    ...state.todos,
    [payload.id]: {
      ...state.todos[payload.id],
      hover: !state.todos[payload.id].hover
    }
  }
})

export default function (state = initialState, action) {
  switch(action.type) {
    case ADD_TODO: return addTodo(state, action.payload)
    case TOGGLE_TODO: return toggleTodo(state, action.payload)
    case HOVER_TODO: return hoverTodo(state, action.payload)
    default:
      return state
  }
}
