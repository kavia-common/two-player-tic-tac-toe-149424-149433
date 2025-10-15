import React, { useCallback } from 'react';
import Square from './Square';

/**
 * PUBLIC_INTERFACE
 * Board renders a 3x3 grid of Square components.
 * Props:
 * - board: array of 9 values ('X' | 'O' | null)
 * - onPlay: function(index) to handle a move
 * - winningLine: array of indexes that form the winning line or null
 * - isDisabled: boolean to disable input when game over
 */
export default function Board({ board, onPlay, winningLine, isDisabled }) {
  const isWinningIndex = useCallback(
    (idx) => Array.isArray(winningLine) && winningLine.includes(idx),
    [winningLine]
  );

  return (
    <div
      className="board"
      role="grid"
      aria-label="Tic Tac Toe Board"
      aria-disabled={isDisabled ? 'true' : 'false'}
    >
      {board.map((value, idx) => (
        <Square
          key={idx}
          value={value}
          index={idx}
          onClick={() => onPlay(idx)}
          disabled={isDisabled || !!value}
          winner={isWinningIndex(idx)}
        />
      ))}
    </div>
  );
}
