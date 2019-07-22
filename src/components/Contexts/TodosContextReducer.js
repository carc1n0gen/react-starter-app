export const TODO_ADD = 'TODO_ADD';
function addTodo(state, text) {
  return {
    nextId: state.nextId + 1,
    todos: {
      ...state.todos,
      [state.nextId]: {
        text,
        completed: false,
        hover: false,
      },
    },
  };
}

export const TODO_TOGGLE = 'TODO_TOGGLE';
function toggleTodo(state, todoId) {
  return {
    ...state,
    todos: {
      ...state.todos,
      [todoId]: {
        ...state.todos[todoId],
        completed: !state.todos[todoId].completed,
        hover: false,
      },
    },
  };
}

export const TODO_HOVER = 'TODO_HOVER';
function hoverTodo(state, todoId) {
  return {
    ...state,
    todos: {
      ...state.todos,
      [todoId]: {
        ...state.todos[todoId],
        hover: !state.todos[todoId].hover,
      },
    },
  };
}

export default function todosReducer(state, action) {
  switch (action.type) {
    case TODO_ADD: return addTodo(state, action.text);
    case TODO_TOGGLE: return toggleTodo(state, action.todoId);
    case TODO_HOVER: return hoverTodo(state, action.todoId);
    default: return state;
  }
}
