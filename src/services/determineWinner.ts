import type { DetermineResult, FeedbackType, Move } from "../components/interfaces/Feedback.interface"

const beats = (player1: Move, player2: Move) =>
  (player1 === 'rock' && player2 === 'scissors') ||
  (player1 === 'scissors' && player2 === 'paper') ||
  (player1 === 'paper' && player2 === 'rock')

export function determineWinner(player1: Move, player2: Move): FeedbackType {
  let winnerPpl: DetermineResult = { winner: null  }
  if (player1 === player2) { 
    winnerPpl = { winner: 'tie' }
    return 'DRAW';
  }
  if (beats(player1, player2)) { winnerPpl = { winner: 'player1' } } else { winnerPpl = { winner: 'player2' } }
  return winnerPpl.winner === 'tie' ? 'DRAW' : winnerPpl.winner === 'player1' ? 'WIN' : 'LOSE';
}


export default determineWinner
