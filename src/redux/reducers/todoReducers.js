import { ADD_TODO, TOGGLE_TODO, HOVER_TODO } from "../actionTypes"

const initialState = {
  nextId: 0,
  todos: {}
}

const addTodo = (state, action) => ({
  nextId: state.nextId + 1,
  todos: {
    ...state.todos,
    [state.nextId]: {
      text: action.payload.text,
      completed: false,
      hover: false
    }
  }
})

const toggleTodo = (state, action) => ({
  ...state,
  todos: {
    ...state.todos,
    [action.payload.id]: {
      ...state.todos[action.payload.id],
      completed: !state.todos[action.payload.id].completed,
      hover: false
    }
  }
})

const hoverTodo = (state, action) => ({
  ...state,
  todos: {
    ...state.todos,
    [action.payload.id]: {
      ...state.todos[action.payload.id],
      hover: !state.todos[action.payload.id].hover
    }
  }
})

export default function (state = initialState, action) {
  switch(action.type) {
    case ADD_TODO: return addTodo(state, action)
    case TOGGLE_TODO: return toggleTodo(state, action)
    case HOVER_TODO: return hoverTodo(state, action)
    default:
      return state
  }
}
