import { HTMLAttributes } from 'react';
import clsx from 'clsx';

interface Props extends HTMLAttributes<HTMLButtonElement> {}
export function Button({ children, className, ...rest }: Readonly<Props>) {
  return (
    <button {...rest} className={clsx(className, 'px-4 py-2 bg-separator rounded')}>
      {children}
    </button>
  );
}
