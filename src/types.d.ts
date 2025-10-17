declare module '*.svg' {
  import type { FunctionComponent, SVGProps } from 'react';
  const content: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.png' {
  const value: string;
  export default value;
}