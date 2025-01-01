import { HTMLAttributes, useState } from 'react';
import clsx from 'clsx';

interface Props extends HTMLAttributes<HTMLDivElement> {
  options: string[];
  setSelectedOption: (index: number) => void;
}
export function Select({ options, setSelectedOption, ...rest }: Readonly<Props>) {
  const [selected, setSelected] = useState(0);

  function handleClick(index: number) {
    setSelected(index);
    setSelectedOption(index);
  }

  return (
    <div className={clsx(rest, 'bg-separator flex rounded overflow-hidden')}>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`px-4 py-1 pb-[6px] flex items-center ${selected === index ? 'bg-selection' : 'text-font-disabled'}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
