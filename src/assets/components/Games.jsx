import React from "react";

export default function Games() {
  return (
    <section id="games">
      <div className="section-content">
        <h2>My Games</h2>
        <div className="games-scroll">
          <div class="card">
            <h3>Rock Paper Scissors</h3>
            <p>
              The ultimate hand game! Choose rock, paper, or scissors and see if
              you can outsmart your opponent.
            </p>
            <a
              href="/games/rpsgame"
              class="play-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Play Game
            </a>
          </div>

          <div className="card">
            <h3>Snake & Ladder</h3>
            <p>
              Roll the dice, scale the ladders, avoid the snakes. Classic board
              game meets modern web interface.
            </p>
            <a
              href="/games/snake-ladder/index.html"
              className="play-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Play Game
            </a>
          </div>

          <div class="card">
            <h3>Chrome Dino</h3>
            <p>
              Jump over cacti(green block) and dodge obstacles in this endless runner game.
              See how far you can go without hitting anything!
            </p>
            <a
              href="/games/chromedino"
              class="play-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Play Game
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
