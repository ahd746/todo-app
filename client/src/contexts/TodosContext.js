import React, { useReducer, createContext } from 'react'
import { todoReducer } from '../reducers/todoReducer'
import axios from 'axios'

// Initial state
const initialState = { todos: [] }


// create context
export const TodosContext = createContext(initialState);

// Provider component
export default function TodosContextProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  //Actions
  async function getTodos() {
    try {
      const res = await axios.get('/api')
      dispatch({
        type: 'GET_TODOS',
        payload: res.data.data
      })
    }
    catch (error) {
      console.log(error)
    }
  }

  async function addTodo(newTodo) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/api', newTodo, config)
      dispatch({
        type: 'ADD_TODO',
        payload: res.data.data
      })
    } catch (error) {
      console.log(error)
    }

  }

  async function deleteTodo(_id) {
    try {
      await axios.delete(`/api/${_id}`)
      dispatch({
        type: 'DELETE_TODO',
        payload: { _id }
      })
    } catch (error) {
      console.log(error)
    }

  }

  async function searchTodo(search) {
    dispatch({
      type: 'SEARCH_TODO',
      payload: { search }
    })
  }

  return (
    <TodosContext.Provider value={{ todos: state.todos, getTodos, addTodo, deleteTodo, searchTodo }} >
      {children}
    </ TodosContext.Provider >
  )
}
