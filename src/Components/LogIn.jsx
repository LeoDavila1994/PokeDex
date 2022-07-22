import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeName } from '../store/slices/userName.slice';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState("");

    useEffect(() => {
        const loader = () => {
            setIsLoading(false);
        }
        setTimeout(loader, 3000);
    }, [])

    const showModal = () => {
        setIsVisible(!isVisible)
    }

    const submit = e => {

        e.preventDefault();
        dispatch(changeName(user));
        if(user !== ""){
            navigate("/pokedex");
            setUser("");
        } else if (user === ""){
            alert("Fill name field")
        }
    }

    return (
        <section>
            {isLoading ?
                <div className='loader'>
                    <div className='logo'></div>
                    <div className='loader-container'>
                        <img src="https://c.tenor.com/e6J4X97EZkIAAAAC/ash-now.gif" alt="" />
                    </div>
                </div> : (
                    <div className='login-container'>
                        <div className='logo'></div>
                        {isVisible ? (
                            <div className='modal'>
                                <div className='container'>
                                    <div className='close' onClick={showModal}><i className="fa-regular fa-circle-xmark"></i></div>
                                    <form className='input-modal-container' onSubmit={submit}>
                                        <input type="text" className='name-user' placeholder='Type your Name' value={user} onChange={e => setUser(e.target.value)} />
                                        <button>Let´s Go !</button>
                                    </form>
                                    <div className='modal-info'>
                                        <div className='img-modal-container'>
                                            <img src="https://images.wikidexcdn.net/mwuploads/wikidex/f/f8/latest/20180820010545/Profesor_Oak_LGPE.png" alt="" />
                                        </div>
                                    </div>
                                    <div className='user-welcome'>
                                        <p>Welcome Trainer !</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className='pokeball-route'>
                                <div className='instruction'>
                                    <p>Catch that pokeball...!</p>
                                </div>
                                <button className='pokeball-position' onClick={showModal}>
                                    <div className='pokeball-rotate'>
                                        <div className='top'></div>
                                        <div className='center'></div>
                                        <div className='bottom'></div>
                                    </div>
                                </button>
                            </div>
                        )}
                    </div>
                )}
        </section>
    );
};

export default LogIn;

