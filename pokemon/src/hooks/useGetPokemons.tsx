import { useEffect, useState } from "react";

export type Pokemon = {
  name: string;
  url: string;
}[];

import { useQuery, gql } from "@apollo/client";

const useGetPokemons = ({
  offset = 0,
  limit = 20,
  name = "",
  type = "",
  ability = "",
}: {
  offset: number;
  limit: number;
  name?: string;
  type?: string;
  ability?: string;
}) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  console.log({
    name,
    ability,
    type,
  });

  const GET_LOCATIONS = gql`
    query getPokemon {
      pokemon_v2_pokemon(limit: ${limit}, offset: ${offset}, where: { name: { _ilike: "%${name}%" }, pokemon_v2_pokemonabilities: {pokemon_v2_ability: {name: {_ilike: "%${ability}%"}}} , 
      pokemon_v2_pokemontypes: {pokemon_v2_type: {name: {_ilike: "%${type}%"}}}
    
    
    }) {
        id
        name
        pokemon_v2_pokemonabilities {
          pokemon_v2_ability {
            name
          }
        }
        pokemon_v2_pokemontypes{
          type_id
            pokemon_v2_type {
              name
            }
          }
        pokemon_v2_pokemonstats {
          base_stat
          effort
          pokemon_v2_stat {
            name
          }
        }
        pokemon_v2_pokemonsprites {
            sprites
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  useEffect(() => {
    if (data) {
      setPokemons(data.pokemon_v2_pokemon);
    }
  }, [data]);

  return { pokemons, loading };
};

export default useGetPokemons;
