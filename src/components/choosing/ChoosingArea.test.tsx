import { render, screen, act, fireEvent } from '@testing-library/react';
import ChoosingArea from './ChoosingArea';
import { BLUE_COLOR } from '../constants/config.mock';
import { MACHINE_THINKING } from '../constants/feedback.mock';

describe('ChoosingArea Component', () => {
  const mockPlayerIcon = 'test-icon.svg';
  const mockPlayerColor = BLUE_COLOR;
  const mockOnRoundEnd = jest.fn();
  const mockOnPlayAgain = jest.fn();
  const mockPlayerChoice = 'rock';

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('test initial for assert render state correctly', () => {
    render(
      <ChoosingArea
        playerIcon={mockPlayerIcon}
        playerColor={mockPlayerColor}
        onRoundEnd={mockOnRoundEnd}
        onPlayAgain={mockOnPlayAgain}
        playerChoice={mockPlayerChoice}
      />
    );

    expect(screen.getByText(MACHINE_THINKING)).toBeInTheDocument();
  });

  it('shows machine choice after delay of 2 seconds', () => {
    render(
      <ChoosingArea
        playerIcon={mockPlayerIcon}
        playerColor={mockPlayerColor}
        onRoundEnd={mockOnRoundEnd}
        onPlayAgain={mockOnPlayAgain}
        playerChoice={mockPlayerChoice}
      />
    );

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(screen.queryByText('MACHINE IS CHOOSING...')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'PLAY AGAIN' })).toBeInTheDocument();
  });

  it('calls onPlayAgain when play again button is clicked and called mock created', () => {
    render(
      <ChoosingArea
        playerIcon={mockPlayerIcon}
        playerColor={mockPlayerColor}
        onRoundEnd={mockOnRoundEnd}
        onPlayAgain={mockOnPlayAgain}
        playerChoice={mockPlayerChoice}
      />
    );

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    const playAgainButton = screen.getByText('PLAY AGAIN');
    fireEvent.click(playAgainButton);

    expect(mockOnPlayAgain).toHaveBeenCalledTimes(1);
  });
});