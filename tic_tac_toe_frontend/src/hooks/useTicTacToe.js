import { useCallback, useMemo, useState } from 'react';
import { calculateWinner, isBoardFull } from '../utils/gameUtils';

/**
 * PUBLIC_INTERFACE
 * useTicTacToe manages Tic Tac Toe game state and logic.
 * Returns:
 * - board: string[] of length 9 with 'X' | 'O' | null
 * - xIsNext: boolean
 * - winner: 'X' | 'O' | null
 * - isDraw: boolean
 * - winningLine: number[] | null
 * - handleSquareClick: (index: number) => void
 * - resetGame: () => void
 */
export function useTicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const { winner, line: winningLine } = useMemo(() => calculateWinner(board), [board]);
  const isDraw = useMemo(() => !winner && isBoardFull(board), [winner, board]);

  const handleSquareClick = useCallback(
    (index) => {
      if (winner || isDraw || board[index]) return;

      setBoard((prev) => {
        const next = prev.slice();
        next[index] = xIsNext ? 'X' : 'O';
        return next;
      });
      setXIsNext((prev) => !prev);
    },
    [board, winner, isDraw, xIsNext]
  );

  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }, []);

  return {
    board,
    xIsNext,
    winner,
    isDraw,
    winningLine,
    handleSquareClick,
    resetGame,
  };
}
