import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import LogIn from './Components/LogIn';
import Pokedex from './Components/Pokedex';
import PokemonDetail from './Components/PokemonDetail';

function App() {

  return (
      <HashRouter>
        <Routes>
          <Route path='/' element={<LogIn />}/>
          <Route path='/pokedex' element={<Pokedex />}/>
          <Route path='/pokedex/:id' element={<PokemonDetail />}/>
        </Routes>
      </HashRouter>
  )
}

export default App
