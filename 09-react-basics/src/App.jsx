import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import RandomDogs from './RandomDogs.jsx';
import Home from './Home.jsx';
import About from './About.jsx';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* Navigation bar with NavLink components.
            NavLink is like Link but automatically adds an 'active' class
            to the currently selected route, which we can style in CSS. */}
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/dogs">Dogs</NavLink>
        </nav>

        {/* Route definitions map URL paths to React components.
            When the URL matches a path, React Router renders the corresponding
            element. Only one route is rendered at a time. */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/dogs" element={<RandomDogs/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;