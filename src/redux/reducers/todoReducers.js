import { ADD_TODO, TOGGLE_TODO, HOVER_TODO } from "../actionTypes"

const initialState = {
  nextId: 0,
  todos: {}
}

export default function (state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return {
        nextId: state.nextId + 1,
        todos: { 
          ...state.todos,
          [state.nextId]: { 
            text: action.payload.text,
            completed: false,
            hover: false
          } 
        }
      }
    case TOGGLE_TODO:
      return {
        ...state,
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
        ...state,
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
