import React, { useState } from "react";
import Modal from "./Modal";
//! import axios from "axios";

export default function Login({ logo }) {
  const modal = document.getElementsByClassName("modal");
  const signBtn = document.getElementById("sign-btn");
  const [isOpen, setOpen] = useState(false);

  //! handleClickOutside Advanced

  const handleModalOpen = () => {
    setOpen(true);
    console.log(isOpen);
  };

  const handleModalOff = () => {
    setOpen(false);
  };

  window.onclick = function (event) {
    console.log(event.target, modal[0]);
    if (event.target !== modal[0] && isOpen && event.target !== signBtn) {
      console.log("여기들어와서");
      handleModalOff();
    }
  };

  return (
    <div>
      <center>
        {/* <form> */}
        <body className="inner-container">
          <section className="identity">
            <h1>로고 및 소개 영역</h1>
            <div className="intro-area">
              <img src={logo} alt="logo" id="logo-login" />
              <div>우리 가운데서 만나요!</div>
            </div>
          </section>
          <section className="inputArea">
            <h1>입력 영역</h1>
            <div id="input-container">
              <input
                className="page1"
                type="text"
                placeholder="Email address"
              />
              <input
                className="page1"
                type="password"
                placeholder="password"
              ></input>
              <button className="page1 button">LOGIN</button>
              <button
                className="page1 button"
                id="sign-btn"
                onClick={handleModalOpen}
              >
                SIGN UP
              </button>
              <div className="page1 button">아이디 / 비밀번호 찾기</div>
            </div>
          </section>
        </body>
        {/* </form> */}
        {isOpen ? <Modal handleModalOff={handleModalOff} /> : null}
      </center>
    </div>
  );
}