import { determineWinner } from './determineWinner';
import type { Move } from '../components/interfaces/Feedback.interface';

    const winningPlayerOne = [
      { player1: 'rock' as Move, player2: 'scissors' as Move },
      { player1: 'paper' as Move, player2: 'rock' as Move },
      { player1: 'scissors' as Move, player2: 'paper' as Move }
    ];

    const winnerPlayerTwo = [
      { player1: 'scissors' as Move, player2: 'rock' as Move },
      { player1: 'rock' as Move, player2: 'paper' as Move },
      { player1: 'paper' as Move, player2: 'scissors' as Move }
    ];

describe('determineWinner', () => {
  it('returns tie when both players choose the same move', () => {
    const moves: Move =  'paper';
      const result = determineWinner(moves, moves);
      expect(result).toBe('DRAW');
  });

  it('correctly determines when player1 wins', () => {
    winningPlayerOne.forEach(({ player1, player2 }) => {
      const result = determineWinner(player1, player2);
      expect(result).toBe('WIN');
    });
  });

  it('correctly determines when player2 wins', () => {

    winnerPlayerTwo.forEach(({ player1, player2 }) => {
      const result = determineWinner(player1, player2);
      expect(result).toBe('LOSE');
    });
  });
});