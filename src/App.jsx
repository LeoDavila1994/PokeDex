import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import LogIn from './Components/LogIn';
import Pokedex from './Components/Pokedex';
import PokemonDetail from './Components/PokemonDetail';
import ProtectedRoutes from './Components/ProtectedRoutes';
import Settings from './Components/Settings';
import { useState } from 'react';


function App() {

  const [screen, setScreen] = useState(true)

  const change = () => {
    setScreen(!screen)
  }

  return (
    <HashRouter>
      {screen ? (
        <section style={{backgroundColor: "#c5eefa"}}>
          <div className='screen-mode' onClick={change}><i className="fa-solid fa-moon"></i></div>
          <Routes>
            <Route path='/' element={<LogIn screen={screen}/>} />
            <Route element={<ProtectedRoutes />}>
              <Route path='/pokedex' element={<Pokedex screen={screen}/>} />
              <Route path='/pokedex/:id' element={<PokemonDetail />} />
              <Route path='/pokedex/settings' element={<Settings />}/>
            </Route>
          </Routes>
        </section>
      ) :
        <section style={{backgroundColor: "#0d2d54"}}>
          <div className='screen-mode2' onClick={change}><i className="fa-solid fa-sun"></i></div>
          <Routes>
            <Route path='/' element={<LogIn />} />
            <Route element={<ProtectedRoutes />}>
              <Route path='/pokedex' element={<Pokedex screen={screen}/>} />
              <Route path='/pokedex/:id' element={<PokemonDetail />} />
              <Route path='/pokedex/settings' element={<Settings />}/>
            </Route>
          </Routes>
        </section>}
    </HashRouter>
  )
}

export default App
