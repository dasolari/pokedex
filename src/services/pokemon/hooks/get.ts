import useSWR from 'swr';
import { GetPokemonArgs } from '../interfaces/requests';
import { get } from '../actions';

const usePokemon = (args: GetPokemonArgs) => {
  const { data, error } = useSWR(args, get)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
};

export default usePokemon;
