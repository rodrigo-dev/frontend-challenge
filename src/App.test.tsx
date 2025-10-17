import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders initial state correctly', () => {
    render(<App />);
    
    expect(screen.getByText('SCORE')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('loads score from localStorage', () => {
    localStorage.setItem('jokepo-score', '10');
    render(<App />);
    
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('updates score when player wins', async () => {
    jest.useFakeTimers();
    render(<App />);
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByTestId('score-value')).toBeInTheDocument();
    
    jest.useRealTimers();
  });

  it('allows player to play again', async () => {
    jest.useFakeTimers();
    render(<App />);
    const initialButtons = screen.getAllByRole('button');
    fireEvent.click(initialButtons[0]);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    const playAgainButton = screen.getByRole('button', { name: 'PLAY AGAIN' });
    fireEvent.click(playAgainButton);
    const newButtons = screen.getAllByRole('button');
    expect(newButtons.length).toBe(3);
    
    jest.useRealTimers();
  });
});