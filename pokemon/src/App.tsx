import Header from "./components/common/header";
import Pokedex from "./components/ui/pokedex";
import { useQuery, gql } from "@apollo/client";

export default function App() {
  return (
    <main className="min-h-screen h-full w-full bg-blue-100">
      <Header />
      <Pokedex />
    </main>
  );
}
