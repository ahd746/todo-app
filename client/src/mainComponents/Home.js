import React, { useEffect, useContext } from 'react'
import img from '../images/img.png'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Home() {
  const { setSum } = useContext(ThemeContext)
  useEffect(() => setSum(0))
  return (
    <>
      <h1>Welcome to Todo Application</h1>
      <div className="d-flex justify-content-center p-5">
        <img src={img} alt="img" />
      </div>
    </>
  )
}
