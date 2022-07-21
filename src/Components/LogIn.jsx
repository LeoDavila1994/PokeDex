import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const LogIn = () => {

    const userName = () => {

    const userName = useSelector(state => state.userName)

    }


    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [ user, setUser ] = useState("");

    useEffect(() => {
        const loader = () =>{
            setIsLoading(false);
        }
        setTimeout(loader, 3000);
    },[])

    const showModal = () => {
        setIsVisible(!isVisible)
    }

    const submit = e => {
        e.preventDefault()
        setUser(user);
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
                                        <input type="text"  className='name-user' placeholder='Type your Name' value={user} onChange={e => setUser(e.target.value)}/>
                                        <button>Let´s Go !</button>
                                    </form>
                                    <div className='modal-info'>
                                        <div className='img-modal-container'>
                                            <img src="https://www.pngmart.com/files/12/Pokemon-Ash-Ketchum-Transparent-PNG.png" alt="" />
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

