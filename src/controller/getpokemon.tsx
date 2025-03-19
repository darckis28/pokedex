import { Pokemon } from "../models/pokemon.m";

export async function getpokemon(): Promise<Pokemon[]> {
  const reponse = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");
  const data = await reponse.json();
  const pokemons = data.results.map((pokemon: Pokemon) => {
    return {
      national_number: pokemon.national_number,
      name: pokemon.name,
      type: pokemon.type,
      sprites: pokemon.sprites,
      hp: pokemon.hp,
      attack: pokemon.attack,
      defense: pokemon.defense,
      sp_atk: pokemon.sp_atk,
      sp_def: pokemon.sp_def,
      speed: pokemon.speed,
    };
  });

  return pokemons;
}
