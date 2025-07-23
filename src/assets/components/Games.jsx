import React from 'react'

export default function Games() {
  return (
        <section id="games">
          <div className='section-content'>

      <h2>My Games</h2>
      <div className="games-scroll">
        <div className="card">
          <h3>Tic Tac Toe</h3>
          <p>A classic two-player game with a clean grid and smart win-detection logic. Works great on mobile too.</p>
          <a href="games/tictactoe/index.html" className="play-btn" target="_blank" rel="noopener noreferrer">Play Game</a>
        </div>
        <div className="card">
          <h3>Snake & Ladder</h3>
          <p>Roll the dice, scale the ladders, avoid the snakes. Classic board game meets modern web interface.</p>
          <a href="games/snake-ladder/index.html" className="play-btn" target="_blank" rel="noopener noreferrer">Play Game</a>
        </div>
        <div className="card">
          <h3>Memory Card Game</h3>
          <p>Flip and match pairs. Sharpen your memory and see how fast you can complete the board.</p>
          <a href="games/memory-card/index.html" className="play-btn" target="_blank" rel="noopener noreferrer">Play Game</a>
        </div>
      </div>
          </div>
    </section>
  )
}
