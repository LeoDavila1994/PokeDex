import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from "axios";
import PokemonCard from "./PokemonCard"

const Pokedex = () => {

    const userName = useSelector(state => state.userName);
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then(res => setPokemons(res.data.results))
            .catch(error => console.log(error.response))
    }, []);

    return (
        <section>
            <div className='top-container-pokedex'>
                <div className='top-pokedex1'></div>
                <div className='top-pokedex2'></div>
                <div className='blue-btn'></div>
                <div className='green-btn'></div>
                <div className='yelow-btn'></div>
                <div className='screen-user'>
                    <p>{userName}</p>
                </div>
            </div>
            <div className='pokemons-container'>
                {pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.url} pokeData={pokemon.url} />
                ))}
            </div>
        </section>
    );
};

export default Pokedex;