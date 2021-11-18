import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import MapPage from "./pages/MapPage";
import SignUpModal from "./pages/SignUpModal";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import logo from "./logo-1.svg";
export default function App() {
  const [islogin, setislogin] = useState(false);
  const [userinfo, setuserinfo] = useState(null);
  const navigate = useNavigate();

  const isAuthenticated = () => {
    axios
      .get("https://localhost:4000/auth")
      .then((res) => {
        //console.log(res.data.data.needInfo);
        setislogin(true);
        setuserinfo(res.data.data.needInfo);
        navigate("/map");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginSuccess = () => {
    isAuthenticated();
  };

  // const handleSignout = () => {
  //   axios
  //     .post("https://localhost:4000/signout")
  //     .then((res) => {
  //       setislogin(false);
  //       setuserinfo(null);
  //       console.log(res);
  //       navigate("/");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Login logo={logo} islogin={islogin} loginSuccess={loginSuccess} />
          }
        ></Route>
        <Route
          exact
          path="/map"
          element={<MapPage logo={logo} userinfo={userinfo} />}
        ></Route>
      </Routes>
    </div>
  );
}
