const LINES = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6],
];

// PUBLIC_INTERFACE
export function calculateWinner(squares) {
  /** Determine the winner and line.
   * @param {Array<string|null>} squares
   * @returns {{winner: 'X'|'O'|null, line: number[]|null}}
   */
  for (const [a,b,c] of LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a,b,c] };
    }
  }
  return { winner: null, line: null };
}

// PUBLIC_INTERFACE
export function isBoardFull(squares) {
  /** Returns true if there are no null squares */
  return squares.every((s) => s !== null && s !== undefined);
}
