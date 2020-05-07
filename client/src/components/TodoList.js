import React, { useContext, useEffect } from 'react'
import Todo from './Todo'
import { TodosContext } from '../contexts/TodosContext'
import { ThemeContext } from '../contexts/ThemeContext'

export default function TodoList() {
  const { todos, getTodos } = useContext(TodosContext)
  const { theme, setSum } = useContext(ThemeContext)
  const mainColor = theme ? "light" : "dark"
  const background = theme ? "dark" : "light"

  useEffect(() => {
    getTodos()
    setSum(0)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    todos.length ?
      <table className={`table table-striped table-${background} text-center text-${mainColor}`}>
        <thead>
          <tr>
            <th scope="col">Todo</th>
            <th scope="col">Due Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => <Todo key={todo._id} todo={todo} />)}
        </tbody>
      </table>
      :
      <p className={`bg-${background} text-${mainColor}`}>No Todos available at this time</p>
  )
}
