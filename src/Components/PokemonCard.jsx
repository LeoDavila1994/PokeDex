import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ pokeData }) => {

    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState("");
    let color ="crimson";

    useEffect(() => {
        axios.get(`${pokeData}`)
            .then(res => setPokemon(res.data))
            .catch(error => console.log(error.response))

    }, []);

    if(pokemon.types?.[0].type.name === "normal"){
        color = "#d9b5b0"
    } else if (pokemon.types?.[0].type.name === "fighting"){
        color = "#ad84db"
    } else if (pokemon.types?.[0].type.name === "flying"){
        color = "#76c2db"
    } else if (pokemon.types?.[0].type.name === "poison"){
        color = "#4c3080"
    } else if (pokemon.types?.[0].type.name === "ground"){
        color = "#85626c"
    } else if (pokemon.types?.[0].type.name === "rock"){
        color = "#5c5a5a"
    } else if (pokemon.types?.[0].type.name === "bug"){
        color = "#cde6ae"
    } else if (pokemon.types?.[0].type.name === "ghost"){
        color = "#160733"
    } else if (pokemon.types?.[0].type.name === "steel"){
        color = "#3f4952"
    } else if (pokemon.types?.[0].type.name === "fire"){
        color = "#e87348"
    } else if (pokemon.types?.[0].type.name === "water"){
        color = "#24758a"
    } else if (pokemon.types?.[0].type.name === "grass"){
        color = "#21a639"
    } else if (pokemon.types?.[0].type.name === "electric"){
        color = "#eff556"
    } else if (pokemon.types?.[0].type.name === "psychic"){
        color = "#db8cba"
    } else if (pokemon.types?.[0].type.name === "ice"){
        color = "#0e4f99"
    } else if (pokemon.types?.[0].type.name === "dragon"){
        color = "#edb50c"
    } else if (pokemon.types?.[0].type.name === "dark"){
        color = "#040921"
    } else if (pokemon.types?.[0].type.name === "fairy"){
        color = "#91ffde"
    } else if (pokemon.types?.[0].type.name === "unknown"){
        color = "#000000"
    } else if (pokemon.types?.[0].type.name === "shadow"){
        color = "#383636"
    } else {
        color = "crimson"
    }


    const detailRoute = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }

    return (
        <div onClick={detailRoute}>
            <div className='pokemon-card'>
                <div className='poke-image' style={{background: `${color}`}}>
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

