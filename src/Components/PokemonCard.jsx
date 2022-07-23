import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ pokeData }) => {

    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState("");

    useEffect(() => {
        axios.get(`${pokeData}`)
            .then(res => setPokemon(res.data))
            .catch(error => console.log(error.response))
    }, []);

    const detailRoute = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }

    return (
        <div onClick={detailRoute}>
            <div className='pokemon-card'>
                <div className='poke-image'>
                    <img src={pokemon.sprites?.other.home.front_default} alt="" />
                </div>
                <div className='poke-center'></div>
                <div className='name-cont-p'>
                    <p>{pokemon.name}</p>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;

