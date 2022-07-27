import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PokemonDetail = () => {

    const userName = useSelector(state => state.userName);
    let color = "crimson";

    const { id } = useParams();
    const navigate = useNavigate();
    const screenMode = useSelector(state => state.screenMode);

    const [pokemon, setPokemon] = useState({});
    const [locations, setLocations] = useState([]);

    const [random1, setRandom1] = useState(Math.floor(Math.random() * 50));
    const [random2, setRandom2] = useState(Math.floor(Math.random() * 50));
    const [random3, setRandom3] = useState(Math.floor(Math.random() * 50));
    const [random4, setRandom4] = useState(Math.floor(Math.random() * 50));

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
            .catch(error => console.log(error.response))

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`)
            .then(res => setLocations(res.data))
            .catch(error => console.log(error.response))

        setRandom1(random1);
        setRandom2(random2);
        setRandom3(random3);
        setRandom4(random4);
    }, [id]);

    if (pokemon.types?.[0].type.name === "normal") {
        color = "#d9b5b0"
    } else if (pokemon.types?.[0].type.name === "fighting") {
        color = "#ad84db"
    } else if (pokemon.types?.[0].type.name === "flying") {
        color = "#76c2db"
    } else if (pokemon.types?.[0].type.name === "poison") {
        color = "#4c3080"
    } else if (pokemon.types?.[0].type.name === "ground") {
        color = "#85626c"
    } else if (pokemon.types?.[0].type.name === "rock") {
        color = "#5c5a5a"
    } else if (pokemon.types?.[0].type.name === "bug") {
        color = "#cde6ae"
    } else if (pokemon.types?.[0].type.name === "ghost") {
        color = "#160733"
    } else if (pokemon.types?.[0].type.name === "steel") {
        color = "#3f4952"
    } else if (pokemon.types?.[0].type.name === "fire") {
        color = "#faa339"
    } else if (pokemon.types?.[0].type.name === "water") {
        color = "#24758a"
    } else if (pokemon.types?.[0].type.name === "grass") {
        color = "#21a639"
    } else if (pokemon.types?.[0].type.name === "electric") {
        color = "#eff556"
    } else if (pokemon.types?.[0].type.name === "psychic") {
        color = "#db8cba"
    } else if (pokemon.types?.[0].type.name === "ice") {
        color = "#0e4f99"
    } else if (pokemon.types?.[0].type.name === "dragon") {
        color = "#455e4d"
    } else if (pokemon.types?.[0].type.name === "dark") {
        color = "#040921"
    } else if (pokemon.types?.[0].type.name === "fairy") {
        color = "#91ffde"
    } else if (pokemon.types?.[0].type.name === "unknown") {
        color = "#000000"
    } else if (pokemon.types?.[0].type.name === "shadow") {
        color = "#383636"
    } else {
        color = "crimson"
    };


    const pokedex = () => {
        navigate("/pokedex/settings");
    }

    const prevPage = () => {
        navigate(-1);
    }


    let screenColor = "";

    if (screenMode === true) {
        screenColor = "#d0fffd"
    } else if (screenMode === false) {
        screenColor = "#2e354d"
    };

    return (
        <section style={{backgroundColor: `${screenColor}`}}>
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
            <div className='container-pokedetail'>
                <div className='gear3' onClick={pokedex}><i className="fa-solid fa-gear"></i></div>
                <div className='prevPage' onClick={prevPage}><i className="fa-solid fa-angles-left"></i></div>
                <div className='grid'>
                    <div className='item item1'>
                        <span><p>Name:</p></span>
                        <p>{pokemon.name}</p>
                    </div>
                    <div className='item item2'>
                        <span><p>Base Experience:</p></span>
                        <p>{pokemon.base_experience} XP.</p>
                        <span><p>Weigth:</p></span>
                        <p>{pokemon.weight} Lb.</p>
                        <span><p>Height:</p></span>
                        <p>{pokemon.height} Fts.</p>
                        <span><p>Moves:</p></span>
                        <p>{pokemon.moves?.[random1]?.move.name}.</p>
                        <p>{pokemon.moves?.[random2]?.move.name}.</p>
                        <p>{pokemon.moves?.[random3]?.move.name}.</p>
                        <p>{pokemon.moves?.[random4]?.move.name}.</p>
                        <span>Types:</span>
                        <p>{pokemon.types?.[0]?.type.name}.</p>
                        <p>{pokemon.types?.[1]?.type.name}.</p>
                    </div>
                    <div className='item item3' style={{ background: `${color}` }}>
                        <img src={pokemon.sprites?.other.home.front_default} alt="" />
                    </div>
                    <div className='item item4'>
                        <span><p>Common Area:</p></span>
                        {locations[0]?.location_area.name ? (
                            <div>
                                <p>{locations[0]?.location_area.name}</p>
                                <p>{locations[1]?.location_area.name}</p>
                                <p>{locations[2]?.location_area.name}</p>
                            </div>
                        ) : <p>Unknown.</p>}
                    </div>
                </div>
            </div>
            <div className='btm-pkdx'></div>
        </section>
    );
};

export default PokemonDetail;