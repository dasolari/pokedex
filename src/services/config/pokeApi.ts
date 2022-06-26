import { PokemonClient } from "pokenode-ts";
import cacheOptions from "./cacheOptions";

const pokemonClient = new PokemonClient({
  cacheOptions,
});

export default pokemonClient;
