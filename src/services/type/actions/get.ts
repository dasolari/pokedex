import pokemonClient from '../../config/pokeApi';
import { Type } from 'pokenode-ts';
import { GetTypeArgs } from '../interfaces/requests';

const get = async ({ id }: GetTypeArgs): Promise<Type> => {
  try {
    if (!id) throw new Error('Missing id');
    return pokemonClient.getTypeById(id);
  } catch (error) {
    throw error;
  }
};

export default get;
