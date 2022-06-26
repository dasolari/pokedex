import pokemonClient from '../../config/pokeApi';
import { Pokemon } from 'pokenode-ts';
import { GetPokemonArgs } from '../interfaces/requests';

const get = async ({ name }: GetPokemonArgs): Promise<Pokemon> => {
  try {
    return pokemonClient.getPokemonByName(name);
  } catch (error) {
    throw error;
  }
};

export default get;
