import { useMemo } from 'react';
import type { NextPage } from 'next';

interface Props {
  name: string;
  baseStat: number;
}

const StatColumn: NextPage<Props> = (props: Props) => {
  const { name, baseStat } = props;
  
  const statValue = useMemo(() => {
    return Math.ceil(baseStat / 17);
  }, [baseStat]);

  return (
    <div className="w-full">
      {Array.from(Array(15).keys()).map((num, index) => {
        if (15 - index <= statValue) {
          return <div key={num} className="w-full h-[0.53rem] bg-sky-500 mb-1" />;
        }
        return <div key={num} className="w-full h-[0.53rem] bg-white mb-1" />;
      })}
      <p className="w-full text-center text-xs font-normal leading-4">{name}</p>
    </div>
  );
}

export default StatColumn;