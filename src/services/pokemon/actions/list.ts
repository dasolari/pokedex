import pokemonClient from '../../config/pokeApi';
import { NamedAPIResourceList } from 'pokenode-ts';
import get from './get';
import { ListPokemonsArgs } from '../interfaces/requests';
import { ListPaginatedPokemons } from '../interfaces/responses';

const listPaginated = async ({
  offset = undefined,
  limit,
}: ListPokemonsArgs): Promise<ListPaginatedPokemons | null> => {
  try {
    const paginatedPokemons = await pokemonClient.listPokemons(offset, limit);
    const pokemons = await Promise.all(paginatedPokemons.results.map(({ name }) => get({ name })));
    return { count: paginatedPokemons.count, results: pokemons };
  } catch (error) {
    return null;
  }
};

export default listPaginated;
