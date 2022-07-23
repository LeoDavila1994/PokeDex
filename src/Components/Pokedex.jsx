import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from "axios";
import PokemonCard from "./PokemonCard"
import { useNavigate } from 'react-router-dom';

const Pokedex = () => {

    const userName = useSelector(state => state.userName);
    const [pokemons, setPokemons] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then(res => setPokemons(res.data.results))
            .catch(error => console.log(error.response))
    }, []);


    const [page, setPage] = useState(1);
    const lastIndex = page * 5;
    const firstIndex = lastIndex - 5;

    const nextPage = () => {
        setPage(page + 1);
    }

    const previousPage = () => {
        setPage(page - 1);
    }

    const pokemonPagination = pokemons.slice(firstIndex, lastIndex);
    const lastPage = Math.ceil(pokemons.length / 5);

    const numberPage = [];
    for (let i = 1; i <= lastPage; i++) {
        numberPage.push(i);
    }

    const [ search, setSearch ] =useState("");

    const submit = e => {

        e.preventDefault();

        for (let i = 0; i < pokemons.length; i++){
            if(search.toLowerCase() === pokemons[i].name){
                navigate(`/pokedex/${search.toLowerCase()}`)
                setSearch("");
                break;
            } else if (pokemons[i] === pokemons[pokemons.length - 1]){
                alert("Wrong Name");
            }
        }

    }

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
            <div className='input-cont'>
                <form onSubmit={submit}>
                    <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search Pokemon by name"/>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
            <div className='pokemons-container'>
                {pokemonPagination.map(pokemon => (
                    <PokemonCard key={pokemon.url} pokeData={pokemon.url} />
                ))}
                <div className='pagination-container'>
                    <button className='poke-btn' onClick={previousPage} disabled={page === 1}><i className="fa-solid fa-angle-left"></i></button>
                    {numberPage.map(number => (
                        <div key={number} className="numPage" onClick={() => setPage(number)}>
                            <p>{number}</p>
                        </div>
                    ))}
                    <button className='poke-btn' onClick={nextPage} disabled={page === lastPage}><i className="fa-solid fa-angle-right"></i></button>
                </div>
            </div>
        </section>
    );
};

export default Pokedex;