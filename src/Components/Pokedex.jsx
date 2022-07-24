import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from "axios";
import PokemonCard from "./PokemonCard"
import { useNavigate } from 'react-router-dom';

const Pokedex = () => {

    const userName = useSelector(state => state.userName);
    const [pokemons, setPokemons] = useState([]);
    const [typeModal, setTypeModal] = useState(false);
    const [ pokemonType, setPokemonType] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
            .then(res => setPokemons(res.data.results))
            .catch(error => console.log(error.response))

        axios.get("https://pokeapi.co/api/v2/type/")
            .then(res => setPokemonType(res.data.results))
            .catch(error => console.log(error.response))
    }, []);

    const [page, setPage] = useState(1);
    const [ indexOne, setIndexOne ] = useState(1);
    const [ indexTwo, setIndexTwo ] = useState (indexOne + 4)
    const lastIndex = page * 10;
    const firstIndex = lastIndex - 10;

    const nextPage = () => {
        setIndexOne(indexOne + 5);
        setIndexTwo(indexTwo + 5);
    }

    const previousPage = () => {
        setIndexOne(indexOne - 5);
        setIndexTwo(indexTwo - 5);
    }

    const filterType = e => {
        axios.get(e.target.value)
            .then(res => setPokemons(res.data.pokemon))
    }

    const pokemonPagination = pokemons.slice(firstIndex, lastIndex);
    const lastPage = Math.ceil(pokemons.length / 10);

    const numberPage = [];
    for (let i = indexOne; i <= indexTwo ; i++) {
        numberPage.push(i);
    }

    const [search, setSearch] = useState("");

    const submit = e => {

        e.preventDefault();

        for (let i = 0; i < pokemons.length; i++) {
            if (search.toLowerCase() === pokemons[i].name) {
                navigate(`/pokedex/${search.toLowerCase()}`)
                setSearch("");
                break;
            } else if (pokemons[i] === pokemons[pokemons.length - 1]) {
                setTypeModal(!typeModal);
                setSearch("");
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
            {typeModal ? (
                <>
                    <div className='type-modal-cont'>
                        <div className='container-modal'>
                            <div className='x' onClick={() => setTypeModal(!typeModal)}><i className="fa-regular fa-circle-xmark"></i></div>
                            <div className='select-list'>
                                <p>WRONG NAME!</p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <select className='selection' onChange={filterType}>
                        <option value="">Select Type</option>
                        {pokemonType.map(type => (
                            <option key={type.name} value={type.url}>{type.name}</option>
                        ))}
                    </select>
                    <div className='input-cont'>
                        <form onSubmit={submit}>
                            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search Pokemon by name" />
                            <button><i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                    <div className='pokemons-container'>
                        {pokemonPagination.map(pokemon => (
                            <PokemonCard key={pokemon.url? pokemon.url : pokemon.pokemon.url} pokeData={pokemon.url? pokemon.url : pokemon.pokemon.url} />
                        ))}
                        <div className='pagination-container'>
                            <button className='poke-btn' onClick={previousPage} disabled={indexOne === 1}><i className="fa-solid fa-angle-left"></i></button>
                            {numberPage.map(number => (
                                <div key={number} className="numPage" onClick={() => setPage(number)}>
                                    <p>{number}</p>
                                </div>
                            ))}
                            <button className='poke-btn' onClick={nextPage} disabled={page === lastPage}><i className="fa-solid fa-angle-right"></i></button>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default Pokedex;