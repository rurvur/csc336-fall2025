import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";

import Home from './Home.jsx';
import About from "./About.jsx"
import Pokemon1 from "./Pokemon1.jsx"
import Pokemon2 from "./Pokemon2.jsx"
import Pokemon3 from "./Pokemon3.jsx"
import Pokemon4 from "./Pokemon4.jsx"
import Pokemon5 from "./Pokemon5.jsx"
import Pokemon6 from "./Pokemon6.jsx"


function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/pokemon1">Slot 1</NavLink>
          <NavLink to="/pokemon2">Slot 2</NavLink>
          <NavLink to="/pokemon3">Slot 3</NavLink>
          <NavLink to="/pokemon4">Slot 4</NavLink>
          <NavLink to="/pokemon5">Slot 5</NavLink>
          <NavLink to="/pokemon6">Slot 6</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/pokemon1" element={<Pokemon1/>}/>
          <Route path="/pokemon2" element={<Pokemon2/>}/>
          <Route path="/pokemon3" element={<Pokemon3/>}/>
          <Route path="/pokemon4" element={<Pokemon4/>}/>
          <Route path="/pokemon5" element={<Pokemon5/>}/>
          <Route path="/pokemon6" element={<Pokemon6/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
