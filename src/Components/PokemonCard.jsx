import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const PokemonCard = ({ pokeData }) => {

    const [pokemon, setPokemon] = useState("");

    useEffect(() => {
        axios.get(`${pokeData}`)
            .then(res => setPokemon(res.data))
            .catch(error => console.log(error.response))
    }, []);

    return (
        <Link to={`/pokedex/${pokemon.id}`} className='link'>
            <div className='pokemon-card'>
                <div className='poke-image'>
                    <img src={pokemon.sprites?.front_default} alt="" />
                </div>
                <div className='poke-center'></div>
                <div className='name-cont-p'>
                    <p>{pokemon.name}</p>
                </div>
            </div>
        </Link>
    );
};

export default PokemonCard;