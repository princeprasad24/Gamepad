import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
        <header>
      <nav>
        <div className="logo">O_O</div>
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#games">Games</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  )
}
