import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Settings = () => {

    const navigate = useNavigate();
    const userName = useSelector(state => state.userName);

    const pokedex = () => {
        navigate("/pokedex");
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
                    <div className='gear2' onClick={pokedex}><i className="fa-solid fa-gear"></i></div>
                </div>
            <div className='seting-main'>
                <div className='container-setings'>
                    <h5>Pokemons by Page:</h5>
                    <div className='color-p'>4</div>
                    <div className='color-p'>8</div>
                    <div className='color-p'>12</div>
                    <div className='color-p'>16</div>
                    <div className='color-p'>20</div>
                </div>
            </div>
        </section>
    );
};

export default Settings;

{/* <div className='screen-mode' onClick={change}><i className="fa-solid fa-moon"></i></div> */}
{/* <div className='screen-mode2' onClick={change}><i className="fa-solid fa-sun"></i></div> */}