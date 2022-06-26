import useSWR from 'swr';
import { ListPokemonsArgs } from '../interfaces/requests';
import { listPaginated } from '../actions';

const usePokemons = (args: ListPokemonsArgs) => {
  const { data, error, mutate } = useSWR(args, listPaginated)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  }
};

export default usePokemons;
