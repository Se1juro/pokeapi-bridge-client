export interface IPokemons {
  count: string;
  next: string;
  previous: string;
  results: IMinPokemon[];
}

export interface IMinPokemon {
  name: string;
  url: string;
}

export interface IPokemon {
  name: string;
  id: number;
  height: number;
  sprites: {
    front_default: string;
  };
}
