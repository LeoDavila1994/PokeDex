import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { mode } from "../store/slices/screenMode.slice"
import { changeNum } from '../store/slices/pokePage.slice';


const Settings = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(state => state.userName);
    const screenMode = useSelector(state => state.screenMode);

    const pokedex = () => {
        navigate(-1);
    }

    const logOut = () => {
        navigate("/");
    }

    const dispatchScreen = () => {
        dispatch(mode());
        navigate(-1);
    }

    const dispatchPokePage4 = () => {
        dispatch(changeNum(4));
        navigate("/pokedex");
    }
    const dispatchPokePage8 = () => {
        dispatch(changeNum(8));
        navigate("/pokedex");
    }
    const dispatchPokePage12 = () => {
        dispatch(changeNum(12));
        navigate("/pokedex");
    }
    const dispatchPokePage16 = () => {
        dispatch(changeNum(16));
        navigate("/pokedex");
    }
    const dispatchPokePage20 = () => {
        dispatch(changeNum(20));
        navigate("/pokedex");
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
                <div className='logOut' onClick={logOut}><i className="fa-solid fa-arrow-right-from-bracket"></i></div>
                <div className='gear2' onClick={pokedex}><i className="fa-solid fa-gear"></i></div>
                {screenMode? <div className='screen-m' onClick={dispatchScreen}><i className="fa-solid fa-moon"></i></div>: <div className='screen-m' onClick={dispatchScreen}><i className="fa-solid fa-sun"></i></div>}
                    <h5>Pokemons by Page:</h5>
                    <div className='color-p' onClick={dispatchPokePage4}>4</div>
                    <div className='color-p' onClick={dispatchPokePage8}>8</div>
                    <div className='color-p' onClick={dispatchPokePage12}>12</div>
                    <div className='color-p' onClick={dispatchPokePage16}>16</div>
                    <div className='color-p' onClick={dispatchPokePage20}>20</div>
                </div>
            </div>
        </section>
    );
};

export default Settings;
