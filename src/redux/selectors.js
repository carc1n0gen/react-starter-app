export const getLocaleState = store => store.localeReducers
export const getTodosState = store => store.todoReducers

export const getLocale = store => getLocaleState(store).language.locale

export const getTodos = store => 
  Object.keys(getTodosState(store).todos).map(key => {
    const todoState = getTodosState(store)
    return { 
      id: key,
      text: todoState.todos[key].text,
      completed: todoState.todos[key].completed,
      hover: todoState.todos[key].hover
    }
  })
