import type { FunctionComponent, SVGProps } from 'react';
import type { Move } from "./Feedback.interface";

export interface IChoosingArea {
  playerChoice: string;
  computerChoice: string;
  result: 'win' | 'lose' | 'draw' | null;
  onPlayAgain: () => void;
}

export interface ChoosingAreaProps {
  playerIcon?: string | FunctionComponent<SVGProps<SVGSVGElement>>
  playerColor?: string
  onRoundEnd?: (machineChoice: Move) => void
  onPlayAgain?: () => void
  playerChoice?: Move
}