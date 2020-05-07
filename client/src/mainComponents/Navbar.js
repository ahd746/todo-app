import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { TodosContext } from '../contexts/TodosContext'
import { ThemeContext } from '../contexts/ThemeContext'
import logo from '../images/logo.jpg'



export default function Navbar() {
  const { searchTodo } = useContext(TodosContext)
  const [search, setSearch] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    searchTodo(search)
    setSearch('')
  }
  const { theme, setTheme } = useContext(ThemeContext)
  const mainColor = theme ? "light" : "dark"
  const background = theme ? "dark" : "light"



  return (
    <nav className={`navbar navbar-expand-lg navbar-${background} bg-${background}`}>
      <img className="navbar-brand" src={logo} alt="logo" width="120" height="50" />
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className={`navbar-toggler-icon`}></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className={`text-${mainColor} nav-link`} to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`text-${mainColor} nav-link`} to="/todos">Todos</Link>
          </li>
          <li className="nav-item">
            <Link className={`text-${mainColor} nav-link`} to="/game">Games</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="">
              Settings
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="#" onClick={() => setTheme(!theme)}>Change Theme</Link>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
          <button className={`btn btn-outline-${mainColor} my-2 my-sm-0`} type="submit">Search</button>
        </form>
      </div>
    </nav >
  )
}
