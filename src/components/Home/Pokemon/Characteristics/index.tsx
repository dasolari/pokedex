import type { NextPage } from 'next';
import type { Pokemon } from 'pokenode-ts';
import { CgGenderMale, CgGenderFemale } from 'react-icons/cg';
import capitalize from '../../../../utils/general/capitalize';
import Stat from './Feature';

interface Props {
  pokemon: Pokemon;
}

const Characteristics: NextPage<Props> = (props: Props) => {
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
        <Stat featureName="Altura" featureValue={`${pokemon.height / 10} m`} />
        <Stat featureName="Peso" featureValue={`${pokemon.weight / 10} kg`} />
        <Stat featureName="Sexo" featureValue={genders} />
      </div>
      <div className="flex flex-col space-y-4">
        <Stat featureName="Categoría" featureValue={capitalize(pokemon.species.name)} />
        <Stat featureName="Habilidad" featureValue={capitalize(pokemon.abilities[0].ability.name)} />
      </div>
    </div>
  );
}

export default Characteristics;