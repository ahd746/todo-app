export const todoReducer = (state, action) => {
  switch (action.type) {

    case 'GET_TODOS':
      return {
        ...state,
        todos: action.payload

      }

    case 'ADD_TODO':
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      }

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload._id)
      }
    case 'SEARCH_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.title.includes(action.payload.search))
      }
    default:
      return state
  }
}