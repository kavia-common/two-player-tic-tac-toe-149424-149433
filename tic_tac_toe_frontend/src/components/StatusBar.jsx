import React, { useMemo } from 'react';

/**
 * PUBLIC_INTERFACE
 * StatusBar displays game status and provides reset control.
 * Props:
 * - xIsNext: boolean
 * - winner: 'X' | 'O' | null
 * - isDraw: boolean
 * - onReset: () => void
 */
export default function StatusBar({ xIsNext, winner, isDraw, onReset }) {
  const statusText = useMemo(() => {
    if (winner) return `Winner: ${winner}`;
    if (isDraw) return 'Draw';
    return `Next Player: ${xIsNext ? 'X' : 'O'}`;
  }, [winner, isDraw, xIsNext]);

  const pillClass = useMemo(() => {
    if (winner) return 'status-pill status-win';
    if (isDraw) return 'status-pill status-draw';
    return 'status-pill';
  }, [winner, isDraw]);

  return (
    <div className="status-bar">
      <div className={pillClass} aria-live="polite" aria-atomic="true">
        <span className="dot" />
        <span className={winner ? 'status-win' : isDraw ? 'status-draw' : 'status-player'}>
          {statusText}
        </span>
      </div>
      <button className="btn secondary" onClick={onReset} aria-label="Reset game">
        Reset Game
      </button>
    </div>
  );
}
