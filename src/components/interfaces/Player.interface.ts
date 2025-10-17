import type { MouseEventHandler, FunctionComponent, SVGProps } from 'react';

export interface IPlayer {
  icon: string | FunctionComponent<SVGProps<SVGSVGElement>>;
  label?: string;
  color: string;
  size?: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}