import { PokeCard } from "../components/PokeCard";

export default function Home() {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Pokédex Benchmark</h1>
      <PokeCard />
    </div>
  );
}
