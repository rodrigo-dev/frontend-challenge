import type { Move } from "../components/interfaces/Feedback.interface"


const moves: Move[] = ['rock', 'paper', 'scissors']

export function randomMove(): Move {
  return moves[Math.floor(Math.random() * moves.length)]
}

export default randomMove
