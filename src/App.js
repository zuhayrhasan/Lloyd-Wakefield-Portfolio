import { Route, Routes } from "react-router-dom";
import Home from './pages/home.js';
import NavBar from "./components/navbar.js";
import './styles/app.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;

//  <Nav></Nav>