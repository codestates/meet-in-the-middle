import Login from "./pages/Login";
import MapPage from "./pages/MapPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import logo from "./logo-1.svg";




export default function App() {
  


  return (
    <div>
      <Routes>
        <Route path="/" element={<Login logo={logo} />} />
        <Route exact path="/map" element={<MapPage logo={logo}/>} />
      </Routes>
    </div>
  );
}
