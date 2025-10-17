export type GameChoice = 'rock' | 'paper' | 'scissors';
export type GameResult = 'win' | 'lose' | 'draw' | null;

export interface IGameMove {
  icon: string;
  color: string;
  label: GameChoice;
}

export interface IGameState {
  score: number;
  playerChoice: GameChoice | null;
  computerChoice: GameChoice | null;
  result: GameResult;
}