import { useState } from 'react';
import type { NextPage } from 'next';
import type { Pokemon } from 'pokenode-ts';
import { MdCatchingPokemon } from 'react-icons/md';
import { useSpecie } from '../../../../services/specie';
import getIdFromUrl from '../../../../utils/general/getIdFromUrl';

interface Props {
  pokemon: Pokemon;
}

const Specie: NextPage<Props> = (props: Props) => {
  const { pokemon } = props;
  const [version, setVersion] = useState(0);
  const { data, isLoading } = useSpecie({ id: getIdFromUrl(pokemon.species.url)! });
  const iconBorder = 'border-solid border-[3px] rounded-full border-cyan-500';
  const iconBorderHidden = 'border-solid border-[3px] rounded-full border-transparent';

  if (!data || isLoading) return null;

  return (
    <div className="w-full">
      {data?.flavor_text_entries && <p className="text-lg font-light mb-8 break-before-all">{data?.flavor_text_entries[version]?.flavor_text || ''}</p>}
      <div className="flex justify-start align-middle space-x-2 mb-6">
        <p className="text-lg font-light mt-1">Versiones:</p>
        <div className={`${version === 0 ? iconBorder : iconBorderHidden}`}>
          <MdCatchingPokemon size={30} className="text-sky-700" onClick={() => setVersion(0)} />
        </div>
        <div className={`${version === 2 ? iconBorder : iconBorderHidden}`}>
          <MdCatchingPokemon size={30} className="text-pink-700" onClick={() => setVersion(2)} />
        </div>
      </div>
    </div>
  );
}

export default Specie;