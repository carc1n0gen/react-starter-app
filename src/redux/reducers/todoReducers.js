import { ADD_TODO, TOGGLE_TODO, HOVER_TODO } from "../actionTypes"

const initialState = {
  todos: {}
}

export default function (state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return {
        todos: { 
          ...state.todos,
          [action.payload.id]: { 
            text: action.payload.text,
            completed: false,
            hover: false
          } 
        }
      }
    case TOGGLE_TODO:
      return {
        todos: {
          ...state.todos,
          [action.payload.id]: {
            ...state.todos[action.payload.id],
            completed: !state.todos[action.payload.id].completed,
            hover: false
          }
        }
      }
    case HOVER_TODO:
      return {
        todos: {
          ...state.todos,
          [action.payload.id]: {
            ...state.todos[action.payload.id],
            hover: !state.todos[action.payload.id].hover
          }
        }
      }
    default:
      return state
  }
}
