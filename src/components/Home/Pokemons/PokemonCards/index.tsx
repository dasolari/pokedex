import type { NextPage } from 'next';
import { Pokemon } from 'pokenode-ts';
import CardsLoader from '../../Loaders/CardsLoader';
import Card from './Card';

interface Props {
  pokemons: Pokemon[] | undefined;
  numberOfLoaders: number;
  loading: boolean;
}

const PokemonCards: NextPage<Props> = (props: Props) => {
  const { pokemons, numberOfLoaders, loading } = props;

  return (
    <div className="w-full mx-auto bg-opacity-0 rounded-md mb-8">
      <div className="w-full h-full grid grid-cols-4 gap-3 overflow-scroll py-4">
        {!!pokemons?.length && (
          <>
            {pokemons?.map((pokemon) => (
              <Card key={pokemon.id} pokemon={pokemon} />
            ))}
          </>
        )}
        {loading && (
          <CardsLoader numberOfLoaders={numberOfLoaders} />
        )}
      </div>
    </div>
  );
}

export default PokemonCards;
