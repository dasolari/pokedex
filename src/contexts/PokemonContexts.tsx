import { ReactNode, createContext, useState } from 'react';
import type { NextPage } from 'next';
import type { Pokemon } from 'pokenode-ts';

interface Props {
  children: ReactNode;
}

interface IContext {
  pokemons: Pokemon[];
  offset: number;
  changeOffset: (value: number) => void;
  handleAddPokemons: (pokemons: Pokemon[]) => void;
  handleClearPokemons: () => void;
}

export const PokemonsContext = createContext<IContext>({
  pokemons: [],
  offset: 0,
  changeOffset: () => {},
  handleAddPokemons: () => {},
  handleClearPokemons: () => {},
});

const PokemonsContextProvider: NextPage<Props> = (props: Props) => {
  const { children } = props;
  const [state, setState] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState<number>(0);

  const handleAddPokemons = (pokemons: Pokemon[]) => {
    const lastPokemon = pokemons.slice(-1)[0];
    const foundInArray = state.find((pokemon) => pokemon.id === lastPokemon.id);
    if (foundInArray) return;
    setState([...state, ...pokemons]);
  };

  const handleClearPokemons = () => {
    setState([]);
  };

  const changeOffset = (value: number) => {
    setOffset(value);
  };

  return (
    <PokemonsContext.Provider value={{
        pokemons: state,
        offset,
        changeOffset,
        handleAddPokemons,
        handleClearPokemons,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
}

export default PokemonsContextProvider;
