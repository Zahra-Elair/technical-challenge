import { FunctionComponent, useState } from "react";

interface PokemonCardProps extends IPokemon {}

const PokemonCard: FunctionComponent<PokemonCardProps> = ({
  id,
  name,
  pokemon_v2_pokemonstats,
  pokemon_v2_pokemontypes,
  pokemon_v2_pokemonsprites,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex flex-col gap-2 items-center justify-center p-4 bg-slate-400 rounded-md cursor-pointer"
      onClick={() => setOpen((s) => !s)}
    >
      {!open ? (
        <>
          <img
            src={JSON.parse(pokemon_v2_pokemonsprites[0].sprites).front_default}
            alt={name}
            className="w-40 h-40"
          />
          <div className="flex flex-col gap-1 items-center">
            <p className="text-center font-bold text-xl">{name}</p>
            <p className="text-gray-800">ID : {id}</p>
          </div>
        </>
      ) : (
        <div className="flex flex-col gpa-1">
          <div className="flex flex-col gap-2 items-center">
            <p className="text-center font-bold text-xl">{name}</p>
            <p className="text-gray-800">ID : {id}</p>
          </div>
          <ul>
            {pokemon_v2_pokemonstats.map((stat, idx) => (
              <li className="flex justify-between gap-2" key={idx}>
                <p className="text-gray-800 font-bold">
                  {stat.pokemon_v2_stat.name}
                </p>
                <p className="text-gray-800">{stat.base_stat}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex w-full items-center gap-4 justify-center mt-auto">
        {pokemon_v2_pokemontypes.map((type) => (
          <div
            className={`bg-gray-50 hover:bg-gray/80 text-black font-bold py-1 px-2  rounded-md `}
            key={type.type_id}
          >
            {type.pokemon_v2_type.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
