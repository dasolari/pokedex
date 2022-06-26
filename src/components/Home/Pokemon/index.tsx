import { useMemo } from 'react';
import type { NextPage } from 'next';
import type { Pokemon } from 'pokenode-ts';
import colorTypes from '../../../utils/pokemonHelpers/types';
import getIdFromUrl from '../../../utils/general/getIdFromUrl';
import { useType } from '../../../services/type';
import Characteristics from './Characteristics';
import Stats from './Stats';
import Specie from './Specie';

interface Props {
  pokemon: Pokemon;
}

const PokemonDetail: NextPage<Props> = (props: Props) => {
  const { pokemon } = props;
  const { data: firstTypeData } = useType({ id: getIdFromUrl(pokemon.types[0].type.url)! });
  const { data: secondTypeData } = useType({ id: getIdFromUrl(pokemon.types[1]?.type?.url) });

  const defaultImage = useMemo(() => {
    let image = pokemon.sprites.other['official-artwork'].front_default;
    if (!image) {
      image = pokemon.sprites.other.home.front_default;
    }
    return image || '';
  }, [pokemon]);

  const filterWeaknesses = useMemo(() => {
    if (!firstTypeData) return [];
    const firstWeaknesses = firstTypeData?.damage_relations?.double_damage_from?.map(({ name }) => name) || [];
    if (!secondTypeData) return firstWeaknesses;
    const secondWeaknesses = secondTypeData?.damage_relations?.double_damage_from?.map(({ name }) => name) || [];
    return Array.from(new Set([...firstWeaknesses, ...secondWeaknesses]));
  }, [firstTypeData, secondTypeData]);

  // This mounstrosity was necessary because apparently tailwind does not allow dynamic bg
  // unless it is defined in the same component
  const bgColor = (name: string) => {
    let color = '';
    switch (name) {
      case 'normal':
        color = 'bg-zinc-400';
        break;
      case 'fighting':
        color = 'bg-orange-500';
        break;
      case 'flying':
        color = 'bg-gray-to-sky';
        break;
      case 'poison':
        color = 'bg-violet-400';
        break;
      case 'ground':
        color = 'bg-yellow-to-yellow';
        break;
      case 'rock':
        color = 'bg-yellow-800';
        break;
      case 'bug':
        color = 'bg-lime-700';
        break;
      case 'ghost':
        color = 'bg-violet-800';
        break;
      case 'steel':
        color = 'bg-slate-500';
        break;
      case 'fire':
        color = 'bg-orange-400';
        break;
      case 'water':
        color = 'bg-sky-600';
        break;
      case 'grass':
        color = 'bg-lime-600';
        break;
      case 'electric':
        color = 'bg-yellow-400';
        break;
      case 'psychic':
        color = 'bg-pink-400';
        break;
      case 'ice':
        color = 'bg-sky-300';
        break;
      case 'dragon':
        color = 'bg-red-to-sky';
        break;
      case 'dark':
        color = 'bg-zinc-700';
        break;
      case 'fairy':
        color = 'bg-pink-300';
        break;
      case 'shadow':
        color = 'bg-zinc-800';
        break;
      default:
        color = 'bg-sky-600';
      }
    return color;
  };

  return (
    <div className="w-full grid grid-cols-2 gap-4">
      <div>
        <div className="w-full h-[28rem] rounded-md bg-gray-200 bg-opacity-80">
          <img src={defaultImage} alt="pokemon" />
        </div>
        <Stats pokemon={pokemon} />
      </div>
      <div>
        <Specie pokemon={pokemon} />
        <Characteristics pokemon={pokemon} />
        <h3 className="w-full mb-4 mt-8 text-xl font-light">Tipo</h3>
        <div className="grid grid-cols-3 gap-2">
          {pokemon.types.map(({ type: { name } }) => {
            const { translate, textColor } = colorTypes(name);
            return <button key={name} className={`w-32 px-2 py-1 rounded-md ${textColor} ${bgColor(name)}`}>{translate}</button>;
          })}
        </div>
        <h3 className="w-full my-4 text-xl font-light">Debilidad</h3>
        <div className="grid grid-cols-3 gap-2">
          {filterWeaknesses?.map((name) => {
            const { translate, textColor } = colorTypes(name);
            return <button key={name} className={`w-32 px-2 py-1 rounded-md ${textColor} ${bgColor(name)}`}>{translate}</button>;
          })}
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;