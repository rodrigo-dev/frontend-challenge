export type Move = 'rock' | 'paper' | 'scissors'
export type Winner = 'player1' | 'player2' | 'tie' | 'invalid' | null
export type FeedbackType = 'WIN' | 'LOSE' | 'DRAW' | null;

export interface DetermineResult {
  winner: Winner
}