import { FormEvent, FunctionComponent, useState } from "react";
import Button from "../common/button";
import Input from "../common/input";
import useGetPokemons from "../../hooks/useGetPokemons";
import PokemonCard from "./pokemon-card";

interface PokedexProps {}
const MaxNumberOfPokemos = 1292;
const Pokedex: FunctionComponent<PokedexProps> = () => {
  const [typeOfSearch, setTypeOfsearch] = useState<"name" | "type" | "ability">(
    "name"
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState(0);

  const handleNext = () => {
    if (page * 20 >= MaxNumberOfPokemos) return;
    setPage(page + 1);
  };
  const handlePrevious = () => {
    if (page === 0) return;
    setPage(page - 1);
  };
  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    setSearch(searchTerm);
    console.log(searchTerm);
  };
  const { pokemons, loading } = useGetPokemons({
    offset: page * 20,
    limit: 20,
    [typeOfSearch]: search,
  });

  return (
    <section className="rounded-xl mx-auto container bg-blue-50  space-y-10 p-4">
      <header className="flex items-center justify-between">
        <Button onClick={handlePrevious}>Previous</Button>
        <p>Page {page + 1}</p>
        <Button onClick={handleNext}>Next</Button>
      </header>

      <form
        onSubmit={onSearch}
        className="flex flex-col gap-2  justify-center  items-center "
      >
        <div className="flex items-center">
          <Input
            placeholder="search by name"
            className="max-w-xs"
            value={searchTerm}
            onTextChange={(val: string) => setSearchTerm(val)}
          />
          <Button>Search</Button>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <label>
            <input
              type="radio"
              name="searchType"
              value="name"
              checked={typeOfSearch === "name"}
              onChange={() => setTypeOfsearch("name")}
            />
            Name
          </label>
          <label>
            <input
              type="radio"
              name="searchType"
              value="type"
              checked={typeOfSearch === "type"}
              onChange={() => setTypeOfsearch("type")}
            />
            Type
          </label>
          <label>
            <input
              type="radio"
              name="searchType"
              value="ability"
              checked={typeOfSearch === "ability"}
              onChange={() => setTypeOfsearch("ability")}
            />
            Ability
          </label>
        </div>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Pokedex;
