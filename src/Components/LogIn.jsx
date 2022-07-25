import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeName } from '../store/slices/userName.slice';
import { useNavigate } from 'react-router-dom';

const LogIn = (  {screen}  ) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState("");
    const [putName, setPutName] = useState(false);

    useEffect(() => {
        const loader = () => {
            setIsLoading(false);
        }
        setTimeout(loader, 2000);
        setPutName(!putName)
    }, []);

    const submit = e => {

        e.preventDefault();
        dispatch(changeName(user));
        if (user) {
            navigate("/pokedex");
            setUser("")
        } else {
            setPutName(false);
        }

    }

    const showModal = () => {
        setIsVisible(!isVisible)
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
                                    <div className='screen'>
                                        {putName ? (
                                            <div>
                                                <div className='user-welcome'>
                                                    <p>Welcome Trainer !</p>
                                                </div>
                                                <form className='input-modal-container' onSubmit={submit}>
                                                    <input type="text" className='name-user' placeholder='Type your Name' value={user} onChange={e => setUser(e.target.value)} />
                                                    <button>A</button>
                                                </form>
                                                <div className='img-modal-container'>
                                                    <img src="https://images.wikidexcdn.net/mwuploads/wikidex/f/f8/latest/20180820010545/Profesor_Oak_LGPE.png" alt="" />
                                                </div>
                                                <button className='close' onClick={showModal}>B</button>
                                            </div>
                                        ) : (<div className='without-name'>
                                            <div className='container-put-name'>
                                                <p>You need put some name</p>
                                            </div>
                                            <div className='inst-screen'>
                                                <p>Press to Continue</p>
                                            </div>
                                            <button className='a-btn2'>A</button>
                                            <div className='close2'>B</div>
                                            <button className='close3' onClick={() => setPutName(!putName)}>B</button>
                                            <button className='a-btn' onClick={() => setPutName(!putName)}>A</button>
                                        </div>
                                        )}
                                    </div>
                                    <div className='horizon'></div>
                                    <div className='vertical'></div>
                                    <div className='horizon2'></div>
                                    <div className='vertical2'></div>
                                    <div className='dial'></div>
                                    <div className='select'></div>
                                    <div className='start'></div>
                                    <div className='voice1'></div>
                                    <div className='voice2'></div>
                                    <div className='voice3'></div>
                                    <div className='modal-info'>
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

