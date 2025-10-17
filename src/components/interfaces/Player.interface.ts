import type { MouseEventHandler } from 'react';

export interface IPlayer {
  icon: string;
  label?: string;
  color: string;
  size?: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}