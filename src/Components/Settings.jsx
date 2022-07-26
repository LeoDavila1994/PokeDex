import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { mode } from "../store/slices/screenMode.slice"

const Settings = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(state => state.userName);
    const screenMode = useSelector(state => state.screenMode);

    const pokedex = () => {
        navigate("/pokedex");
    }

    const dispatchScreen = () => {
        dispatch(mode());
    }


    return (
        <section>
            <div className='top-container-pokedex2'>
                    <div className='top-pokedex1'></div>
                    <div className='top-pokedex2'></div>
                    <div className='blue-btn'></div>
                    <div className='green-btn'></div>
                    <div className='yelow-btn'></div>
                    <div className='screen-user'>
                        <p>{userName}</p>
                    </div>
                </div>
            <div className='seting-main'>
                <div className='container-setings'>
                <div className='gear2' onClick={pokedex}><i className="fa-solid fa-gear"></i></div>
                {screenMode? <div className='screen-m' onClick={dispatchScreen}><i className="fa-solid fa-moon"></i></div>: <div className='screen-m' onClick={dispatchScreen}><i className="fa-solid fa-sun"></i></div>}
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
