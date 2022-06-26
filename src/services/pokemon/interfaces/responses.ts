import { Pokemon } from "pokenode-ts";

export interface ListPaginatedPokemons {
  count: number;
  results: Pokemon[];
}