# Ocean Professional Tic Tac Toe (React)

A simple, accessible Tic Tac Toe game with a modern “Ocean Professional” aesthetic.

## Features
- 3x3 grid with alternating X and O turns
- Winner detection with highlighted winning line
- Draw detection
- Reset button to start a new game
- Keyboard accessible buttons and ARIA live status updates
- Minimal dependencies, plain CSS

## Getting Started
- Install dependencies: `npm install`
- Start dev server: `npm start`
- Open: http://localhost:3000

## Accessibility
- Each square is a native button (focusable, operable by keyboard)
- Status updates are announced with `aria-live="polite"`
- Clear labels for screen reader users (e.g., “Square 1, X”)

## Structure
- src/components
  - Header.jsx: App header with branding
  - Board.jsx: 3x3 grid renderer
  - Square.jsx: Interactive cell
  - StatusBar.jsx: Status and reset control
- src/hooks
  - useTicTacToe.js: Encapsulates game state and logic
- src/utils
  - gameUtils.js: Winner and draw helpers
- src/assets
  - logo-ocean.svg: Brand icon

## Theme
Colors pulled from Ocean Professional:
- Primary: #3b82f6
- Secondary: #64748b
- Success: #06b6d4
- Error: #EF4444
- Background: #f9fafb
- Surface: #ffffff
- Text: #111827

## Testing
CRA test harness remains; add tests as needed in `src/`.

