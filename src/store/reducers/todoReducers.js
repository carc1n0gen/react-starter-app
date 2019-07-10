import { ADD_TODO, TOGGLE_TODO, HOVER_TODO } from '../actions'

const initialState = {
  nextId: 0,
  todos: {}
}

// Ever wondered what immutable object manipulation looks like without using
// a library like immutableJS? Well here ya go in all its terrible glory!

const addTodo = (state, action) => ({
  nextId: state.nextId + 1,
  todos: {
    ...state.todos,
    [state.nextId]: {
      text: action.text,
      completed: false,
      hover: false
    }
  }
})

const toggleTodo = (state, action) => ({
  ...state,
  todos: {
    ...state.todos,
    [action.todoId]: {
      ...state.todos[action.todoId],
      completed: !state.todos[action.todoId].completed,
      hover: false
    }
  }
})

const hoverTodo = (state, action) => ({
  ...state,
  todos: {
    ...state.todos,
    [action.todoId]: {
      ...state.todos[action.todoId],
      hover: !state.todos[action.todoId].hover
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
