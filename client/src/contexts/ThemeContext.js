import React, { useState, createContext } from 'react'

// create theme context
export const ThemeContext = createContext();

// Theme provider component
export default function ThemeContextProvider({ children }) {
  //for theme
  const [theme, setTheme] = useState(true)
  //for game
  const [sum, setSum] = useState(0)
  const [toggle, setToggle] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, sum, setSum, toggle, setToggle }} >
      {children}
    </ ThemeContext.Provider >
  )
}
