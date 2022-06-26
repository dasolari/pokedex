import { useMemo } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Pokemon } from 'pokenode-ts';
import zeroesAdder from '../../../../../utils/general/zeroesAdder';
import capitalize from '../../../../../utils/general/capitalize';
import colorTypes from '../../../../../utils/pokemonHelpers/types';

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: NextPage<Props> = (props: Props) => {
  const { pokemon } = props;
  const router = useRouter();

  const defaultImage = useMemo(() => {
    let image = pokemon.sprites.other['official-artwork'].front_default;
    if (!image) {
      image = pokemon.sprites.other.home.front_default;
    }
    return image || '';
  }, [pokemon]);

  const goToPokemonDetail = () => {
    router.push(`/${pokemon.name}`);
  };

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
    <div className="w-full mx-auto my-2 rounded-md cursor-pointer hover:animate-bounce-once" onClick={() => goToPokemonDetail()}>
      <div className="flex-1 py-1">
        <img src={defaultImage} alt="pokemon" className="rounded-md bg-gray-200 bg-opacity-80" />
        <div className="flex-1 space-y-3 pl-3 pb-1">
          <p className="text-sm text-neutral-400">N.º {zeroesAdder(pokemon.id)}</p>
          <div className="space-y-2">
            <p className="text-[22px]">{capitalize(pokemon.name)}</p>
            <div className="grid grid-cols-3 gap-2">
              {pokemon.types.map(({ type: { name } }) => {
                const { translate, textColor } = colorTypes(name);
                return (
                  <div
                    key={`${pokemon.name}-${name}`}
                    className={`h-6 ${bgColor(name)} rounded col-span-1 flex flex-col justify-center ${name === 'ghost' && 'w-fit px-0.5'}`}
                  >
                    <p className={`bg-opacity-0 text-center text-sm ${textColor}`}>{translate}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
