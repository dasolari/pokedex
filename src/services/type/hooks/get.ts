import useSWR from 'swr';
import { GetTypeArgs } from '../interfaces/requests';
import { get } from '../actions';

const useType = (args: GetTypeArgs) => {
  const { data, error } = useSWR(args, get)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
};

export default useType;
