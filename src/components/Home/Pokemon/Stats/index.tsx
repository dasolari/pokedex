import type { NextPage } from 'next';
import type { Pokemon } from 'pokenode-ts';
import StatColumn from './StatColumn';

interface Props {
  pokemon: Pokemon;
}

const Stats: NextPage<Props> = (props: Props) => {
  const { pokemon } = props;

  return (
    <div className="w-full h-[18rem] mt-6 bg-neutral-400 px-6 pt-2 pb-4 rounded-lg">
      <h1 className="text-lg text-slate-700 mb-4">Puntos de base</h1>
      <div className="grid grid-cols-6 gap-2">
        {pokemon.stats.map(({ base_stat, stat: { name } }) => (
          <StatColumn key={name} name={name} baseStat={base_stat} />
        ))}
      </div>
    </div>
  );
}

export default Stats;