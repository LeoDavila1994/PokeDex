import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import LogIn from './Components/LogIn';
import Pokedex from './Components/Pokedex';
import PokemonDetail from './Components/PokemonDetail';
import ProtectedRoutes from './Components/ProtectedRoutes';
import Settings from './Components/Settings';


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex  />} />
          <Route path='/pokedex/:id' element={<PokemonDetail />} />
          <Route path='/pokedex/settings' element={<Settings />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
