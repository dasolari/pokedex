import type { NextPage } from 'next';
import type { Pokemon } from 'pokenode-ts';
import { CgGenderMale, CgGenderFemale } from 'react-icons/cg';
import capitalize from '../../../../utils/general/capitalize';
import Stat from './Stat';

interface Props {
  pokemon: Pokemon;
}

const Stats: NextPage<Props> = (props: Props) => {
  const { pokemon } = props;

  const genders = (
    <div className="flex justify-start">
      <CgGenderMale className="mr-4" size={30} />
      <CgGenderFemale size={30} />
    </div>
  );

  return (
    <div className="w-full grid grid-cols-2 py-4 px-6 rounded-lg bg-sky-500">
      <div className="flex flex-col space-y-4">
        <Stat statName="Altura" statValue={`${pokemon.height / 10} m`} />
        <Stat statName="Peso" statValue={`${pokemon.weight} kg`} />
        <Stat statName="Sexo" statValue={genders} />
      </div>
      <div className="flex flex-col space-y-4">
        <Stat statName="Categoría" statValue={capitalize(pokemon.species.name)} />
        <Stat statName="Habilidad" statValue={capitalize(pokemon.abilities[0].ability.name)} />
      </div>
    </div>
  );
}

export default Stats;