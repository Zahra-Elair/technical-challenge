interface IPokemon {
  id: string;
  name: string;
  pokemon_v2_pokemontypes: {
    type_id: string;
    pokemon_v2_type: {
      name: string;
    };
  }[];
  pokemon_v2_pokemonstats: {
    base_stat: number;
    effort: number;
    pokemon_v2_stat: {
      name: string;
    };
  }[];
  pokemon_v2_pokemonsprites: {
    sprites: string;
  }[];
}
