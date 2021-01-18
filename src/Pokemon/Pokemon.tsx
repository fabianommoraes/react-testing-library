import React, { useState } from 'react';
import axios from 'axios';
import Input from '../Input/Input';

const pokemonApiUrl = 'https://pokeapi.co/api/v2/pokemon/';

type FullAbility = {
  ability: Ability;
  is_hidden: string;
  slot: number;
};

export type Ability = {
  name: string;
  url: string;
};

const Pokemon = () => {
  const [pokemonName, setPokemonName] = useState<string>('');
  const [pokemonAbilities, setPokemonAbilities] = useState<Ability[]>([]);
  const [error, setError] = useState<string>('');

  const handleFetch = async (_: React.MouseEvent) => {
    console.log('handleFetch');
    let result;
    try {
      result = await axios.get(`${pokemonApiUrl}${pokemonName}`);

      console.log(result);

      setPokemonAbilities(
        result.data.abilities.map((ability: FullAbility) => ability.ability),
      );
      setError('');
    } catch (error) {
      setPokemonAbilities([]);
      setError('Something wrong happened...');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  return (
    <>
      <Input value={pokemonName} onChange={handleChange}>
        Pokemon name:{' '}
      </Input>
      <br />
      <button type="button" onClick={handleFetch}>
        Fetch Pokemon abilities
      </button>
      <br />
      <br />
      {error && <span>{error}</span>}
      <ul>
        {pokemonAbilities.map((ability: Ability) => (
          <li key={ability.name}>
            <a href={ability.url}>{ability.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pokemon;
