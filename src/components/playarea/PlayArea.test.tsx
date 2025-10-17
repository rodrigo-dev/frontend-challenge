import { render, screen, fireEvent } from '@testing-library/react';
import PlayArea from './PlayArea';

describe('PlayArea Component', () => {
  const mockOnPick = jest.fn();

  beforeEach(() => {
    mockOnPick.mockClear();
  });

  it('renders all three move options', () => {
    render(<PlayArea eventDecision={mockOnPick} />);
    
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);
  });

  it('calls onPick with correct move when buttons are clicked', () => {
    render(<PlayArea eventDecision={mockOnPick} />);  
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    expect(mockOnPick).toHaveBeenCalledWith('scissors');
    fireEvent.click(buttons[1]);
    expect(mockOnPick).toHaveBeenCalledWith('rock');
    fireEvent.click(buttons[2]);
    expect(mockOnPick).toHaveBeenCalledWith('paper');
    expect(mockOnPick).toHaveBeenCalledTimes(3);
  });

  it('renders buttons with correct images', () => {
    render(<PlayArea eventDecision={mockOnPick} />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3);
    const alts = images.map(img => img.getAttribute('alt'));
    expect(alts).toContain('move');
  });
});