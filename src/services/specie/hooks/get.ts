import useSWR from 'swr';
import { GetSpecieArgs } from '../interfaces/requests';
import { get } from '../actions';

const useSpecie = (args: GetSpecieArgs) => {
  const { data, error, mutate } = useSWR(args, get)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  }
};

export default useSpecie;
