import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import LogIn from './Components/LogIn';
import Pokedex from './Components/Pokedex';
import PokemonDetail from './Components/PokemonDetail';
import ProtectedRoutes from './Components/ProtectedRoutes';
import { useEffect, useState } from 'react';

function App() {

  const [soundTrack, setSoundTrack] = useState(true)

  const audio = () => {
    setSoundTrack(!soundTrack);
  }

  return (
    <HashRouter>
      <button className='btn-sound' onClick={audio}><i className="fa-solid fa-volume-high"></i></button>
      {soundTrack ? (<audio src="./src/Pist/PokePist.mp3" autoPlay></audio>) : <></>}
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokemonDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
