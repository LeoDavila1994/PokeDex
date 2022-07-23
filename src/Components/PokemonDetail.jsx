import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PokemonDetail = () => {

    const userName = useSelector(state => state.userName);

    const { id } = useParams();

    const [pokemon, setPokemon] = useState({});
    const [ locations, setLocations] =useState([]);

    const [ random1, setRandom1 ] =useState(Math.floor(Math.random() * 50));
    const [ random2, setRandom2 ] =useState(Math.floor(Math.random() * 50));
    const [ random3, setRandom3 ] =useState(Math.floor(Math.random() * 50));
    const [ random4, setRandom4 ] =useState(Math.floor(Math.random() * 50));

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
            <div className='container-pokedetail'>
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
                    <div className='item item3'>
                        <img src={pokemon.sprites?.other.home.front_default} alt="" />
                    </div>
                    <div className='item item4'>
                        <span><p>Common Area:</p></span>
                        {locations[0]?.location_area.name? (
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