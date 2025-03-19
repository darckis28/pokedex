export type PokemonImages = {
  normal: string;
  large: string;
  animated: string;
};
export type Pokemon = {
  national_number: string;
  evolution: null;
  sprites: PokemonImages;
  name: string;
  type: string[];
  total: number;
  hp: number;
  attack: number;
  defense: number;
  sp_atk: number;
  sp_def: number;
  speed: number;
};
