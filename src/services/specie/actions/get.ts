import pokemonClient from '../../config/pokeApi';
import { PokemonSpecies } from 'pokenode-ts';
import { GetSpecieArgs } from '../interfaces/requests';

const get = async ({ id }: GetSpecieArgs): Promise<PokemonSpecies> => {
  try {
    return pokemonClient.getPokemonSpeciesById(id);
  } catch (error) {
    throw error;
  }
};

export default get;
