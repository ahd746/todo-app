import React, { useContext } from 'react'
import { TodosContext } from '../contexts/TodosContext'


export default function Todo({ todo }) {
  const { deleteTodo } = useContext(TodosContext)
  const date = `${new Date(todo.dueDate).getDate() + 1} / ${new Date(todo.dueDate).getMonth() + 1}  / ${new Date(todo.dueDate).getFullYear()} `
  return (

    <tr>
      <td>{todo.title}</td>
      <td>{date}</td>
      <td className="delete" onClick={() => deleteTodo(todo._id)}>Delete</td>
    </tr >
  )
}
