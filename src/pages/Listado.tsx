import { Card, ListGroup } from "react-bootstrap";
import { getpokemon } from "../controller/getpokemon";
import { Pokemon } from "../models/pokemon.m";
import { useEffect, useState } from "react";
const Listado = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  useEffect(() => {
    getpokemon().then((pokemons) => {
      setPokemons(pokemons);
    });
  }, []);
  return (
    <>
      <div className="content-wrapper">
        <div className="content">
          <div className="row gap-3">
            {pokemons.map((pokemon) => (
              <Card
                className="mx-auto"
                style={{ width: "18rem" }}
              >
                <Card.Header>tipo : {pokemon.type[0]}</Card.Header>
                <Card.Img
                  className="d-block mx-auto w-50"
                  width={80}
                  height={100}
                  variant="top"
                  src={pokemon.sprites.normal}
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    {pokemon.name}
                  </Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>HP: {pokemon.hp}</ListGroup.Item>
                    <ListGroup.Item>Ataque: {pokemon.attack}</ListGroup.Item>
                    <ListGroup.Item>Defensa: {pokemon.defense}</ListGroup.Item>
                    <ListGroup.Item>e.ataque: {pokemon.sp_atk}</ListGroup.Item>
                    <ListGroup.Item>e.Defensa: {pokemon.sp_def}</ListGroup.Item>
                    <ListGroup.Item>Velocidad: {pokemon.speed}</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Listado;
