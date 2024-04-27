"use client";
import React from "react";
import Image from "next/image";

export const PokeCard = () => {
  // Define PokemonData type
  const [inputText, setInputText] = React.useState("");
  const [data, setData] = React.useState({
    name: "",
    sprites: {
      front_default: "",
    },
  });
  const fetchPokemon = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + inputText + "/",
    );
    const data = await response.json();
    console.log(data);
    setData(data);
  };

  return (
    <div className="poke-card flex text-center">
      <textarea
        className="textarea textarea-primary"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={fetchPokemon} className="btn btn-primary">
        Fetch Pokemon
      </button>
      <div className="stats">
        <div className="stat">
          <h2 className="stat-value">{data.name}</h2>
          <Image
            className="stat-figure"
            src={data.sprites.front_default}
            width={500}
            height={500}
            alt={data.name}
          />
        </div>
      </div>
    </div>
  );
};

// In your page component:
