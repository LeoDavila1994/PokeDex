import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokemonCard = ({ pokeData }) => {

    const [pokemon, setPokemon] = useState("");

    useEffect(() => {
        axios.get(`${pokeData}`)
            .then(res => setPokemon(res.data))
            .catch(error => console.log(error.response))
    }, []);

    return (
        <div className='pokemon-card'>
            <div className='poke-image'>
                <img src={pokemon.sprites?.front_default} alt="" />
            </div>
            <p>{pokemon.name}</p>
            <p>{pokemon.types?.[0].type.name}</p>
            <p>{pokemon.types?.[1]?.type.name}</p>
        </div>
    );
};

export default PokemonCard;