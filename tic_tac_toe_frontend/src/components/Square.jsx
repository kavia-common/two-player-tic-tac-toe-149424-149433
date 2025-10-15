import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Square is an interactive cell for the board.
 * Props:
 * - value: 'X' | 'O' | null
 * - index: number (0-8)
 * - onClick: () => void
 * - disabled: boolean
 * - winner: boolean (if this square is part of the winning line)
 */
export default function Square({ value, index, onClick, disabled, winner }) {
  const label = value ? `Square ${index + 1}, ${value}` : `Square ${index + 1}, empty`;

  return (
    <button
      type="button"
      className={`square${winner ? ' winner' : ''}${disabled ? ' disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      aria-pressed={!!value}
      role="gridcell"
    >
      <span className="content" aria-hidden="true">
        {value}
      </span>
    </button>
  );
}
