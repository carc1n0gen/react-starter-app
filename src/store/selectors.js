export const getLocaleState = store => store.locale
export const getTodosState = store => store.todo

export const getLocale = store => getLocaleState(store).locale

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
