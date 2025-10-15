import React from 'react';
import './App.css';
import Header from './components/Header';
import Board from './components/Board';
import StatusBar from './components/StatusBar';
import { useTicTacToe } from './hooks/useTicTacToe';

/**
 * PUBLIC_INTERFACE
 * App is the main entry point rendering the Tic Tac Toe game UI using the Ocean Professional theme.
 */
function App() {
  const {
    board,
    xIsNext,
    winner,
    isDraw,
    winningLine,
    handleSquareClick,
    resetGame,
  } = useTicTacToe();

  return (
    <div className="app-shell">
      <Header />
      <main className="main" role="main">
        <section className="card" aria-label="Tic Tac Toe Game">
          <StatusBar
            xIsNext={xIsNext}
            winner={winner}
            isDraw={isDraw}
            onReset={resetGame}
          />
          <Board
            board={board}
            onPlay={handleSquareClick}
            winningLine={winningLine}
            isDisabled={!!winner || isDraw}
          />
        </section>
      </main>
      <footer className="footer">
        Ocean Professional UI • Accessible • Keyboard friendly
      </footer>
    </div>
  );
}

export default App;
