import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TbPokeball } from 'react-icons/tb';
import PokemonCards from './PokemonCards';
import { usePokemons } from '../../../services/pokemon';
import usePokemonContext from '../../../contexts/hooks/usePokemonContext';

const Pokemons: NextPage = () => {
  const [limit] = useState<number>(21);
  const { pokemons, offset, changeOffset, handleAddPokemons, handleClearPokemons } = usePokemonContext();
  const { data, isLoading, mutate } = usePokemons({ offset, limit });

  const loadMorePokemon = () => {
    changeOffset(offset + limit);
    mutate();
  };

  const loadRandomPokemon = () => {
    const max = data?.count ? data.count - limit : 0;
    const min = 0;
    const randomOffset = Math.floor(Math.random() * (max - min + 1)) + min;
    changeOffset(randomOffset);
    handleClearPokemons();
    mutate();
  };

  useEffect(() => {
    if (data) {
      handleAddPokemons(data.results, offset);
    }
  }, [data]);

  return (
    <div className="w-full flex flex-col mt-8">
      <div className="w-full flex justify-between">
        <button
          className="w-1/3 p-3 bg-cyan-600 rounded-md text-white text-xl hover:bg-cyan-700 transition-all"
          onClick={loadRandomPokemon}
        >
          <span className="flex justify-center align-middle">
            <HiOutlineRefresh size={25} />
            <p className="-mt-px p-0">¡Sorpréndeme!</p>
          </span>
        </button>
        <div className="w-1/3 bg-gray-900 text-white rounded-md pl-12 relative">
          <TbPokeball className="absolute left-4 top-1/2 transform -translate-y-1/2" size={25} />
          <select className="w-full h-full bg-inherit rounded-md" placeholder="Ordenar por...">
            <option>Número Inferior</option>
            <option>Número Superior</option>
            <option>A-Z</option>
            <option>Z-A</option>
          </select>
        </div>
      </div>
      <PokemonCards pokemons={pokemons} numberOfLoaders={limit} loading={isLoading} />
      <button
        className="px-4 py-2 mb-8 w-fit mx-auto bg-cyan-500 rounded-md text-white hover:bg-cyan-600"
        onClick={loadMorePokemon}
      >
        Cargar más Pokémon
      </button>
    </div>
  );
}

export default Pokemons;
