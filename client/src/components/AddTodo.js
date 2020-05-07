import React, { useState, useContext } from 'react'
import { TodosContext } from '../contexts/TodosContext'
import { ThemeContext } from '../contexts/ThemeContext'

export default function AddTodo() {
  const { addTodo } = useContext(TodosContext)
  const [title, setTitle] = useState('')
  const [dueDate, setDueDate] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = { title, dueDate }
    addTodo(newTodo)
    setTitle('')
  }
  const { theme } = useContext(ThemeContext)
  const mainColor = theme ? "light" : "dark"
  const background = theme ? "dark" : "light"
  return (
    <form className={`bg-${background} text-${mainColor}`} onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Todo: </label>
        <input type="text" value={title} required placeholder="Enter the Todo.." onChange={(e) => setTitle(e.target.value)} className="form-control" />
      </div>
      <div className="form-group">
        <label>Due Date: </label>
        <input type="date" value={dueDate} required onChange={(e) => setDueDate(e.target.value)} className="form-control" />
      </div>
      <button className="btn btn-primary m-2">Add Todo</button>
    </ form >
  )
}
