export interface GetPokemonArgs {
  name: string;
}

export interface ListPokemonsArgs {
  offset?: number;
  limit: number;
}
