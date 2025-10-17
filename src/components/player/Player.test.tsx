import { render, screen, fireEvent } from '@testing-library/react';
import Player from './Player';

describe('Player Component', () => {
  const mockIcon = 'test-icon.svg';
  const mockColor = '#ff0000';
  const mockOnClick = jest.fn();

  it('renders with required props', () => {
    render(
      <Player
        icon={mockIcon}
        label="Test"
        color={mockColor}
        onClick={mockOnClick}
      />
    );
    
    const playerButton = screen.getByRole('button');
    const img = screen.getByRole('img');

    expect(playerButton).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', mockIcon);
  });

  it('calls onClick when clicked', () => {
    render(
      <Player
        icon={mockIcon}
        label="Test"
        color={mockColor}
        onClick={mockOnClick}
      />
    );
    
    const playerButton = screen.getByRole('button');
    fireEvent.click(playerButton);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});