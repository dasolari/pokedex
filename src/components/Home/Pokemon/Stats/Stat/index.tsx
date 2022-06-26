import { ReactNode } from 'react';
import type { NextPage } from 'next';

interface Props {
  statName: string;
  statValue: ReactNode;
}

const Stat: NextPage<Props> = (props: Props) => {
  const { statName, statValue } = props;

  return (
    <div className="flex flex-col">
      <p className="w-full mb-2 text-white text-xl font-light">
        {statName}
      </p>
      <div className="w-full text-black text-xl font-light">
        {statValue}
      </div>
    </div>
  );
}

export default Stat;