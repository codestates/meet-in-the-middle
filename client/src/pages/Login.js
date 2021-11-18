import React, { useState, useEffect, useRef } from "react";
import SignUpModal from "./SignUpModal";
import FindInfo from "./FindInfo";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function Login({ logo, loginSuccess }) {
  const modal = document.getElementsByClassName("modal");
  const signBtn = document.getElementById("sign-btn");
  const findBtn = document.getElementById("find-btn");
  // 모달 관련 useState
  const [isOpen, setOpen] = useState(false);
  const [isOpenFind, setOpenFind] = useState(false);

  const signUpModalOpen = () => {
    setOpen(true);
  };

  const findModalOpen = () => {
    setOpenFind(true);
    console.log(isOpenFind);
  };

  const ModalOff = () => {
    setOpen(false);
    setOpenFind(false);
  };

  // 로그인 통신
  const [logininfo, setlogininfo] = useState({
    email: '',
    password: ''
  });

  const inputValue = (key) => (e) => {
    setlogininfo({...logininfo, [key]: e.target.value});
  };

  const handleSignin = () => {
    const login = {email: logininfo.email, password: logininfo.password};
    //console.log(login);

    if(!login.email || !login.password) {
      alert('이메일과 비밀번호를 입력하세요');
    }
    axios.post('https://localhost:4000/signin', login,
      {headers: {'Content-Type': 'application/json'}, withCredentials: true}
    )
    .then((res) => {
      //console.log(res);
      loginSuccess(res);
    })
  };

  // window.onclick = function (event) {
  //   if (event.target !== modal[0] && isOpen && event.target !== signBtn) {
  //     ModalOff();
  //   }
  // };

  return (
    <div>
      <center>
        <form onSubmit={(e) => e.preventDefault()}>
        <body className="inner-container">
          <section className="identity">
            {/* <h1>로고 및 소개 영역</h1> */}
            <div className="intro-area">
              <div className="container">
                <img src={logo} alt="logo" id="logo-login" />
                <img
                  className="introduction"
                  src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa28ae486-c85a-4ee0-830a-0664a564da35%2Fintro1.png?table=block&id=d819f83b-cf9f-4c21-9de3-505e52b85e41&spaceId=34b2f1fd-9d82-4494-8402-1bb057b304db&width=2000&userId=b5cfa95d-0fdc-4653-8882-18e28aaae8e9&cache=v2"
                  alt="intro"
                />
              </div>
            </div>
          </section>
          <section className="inputArea">
            {/* <h1>입력 영역</h1> */}
            <div className="input-container">
              <img
                className="welcome"
                src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd24a9efc-85b5-4fd9-bc10-b970598faaf7%2Fwelcome.png?table=block&id=55d6901b-6ddc-466a-acb2-0e482f6e9248&spaceId=34b2f1fd-9d82-4494-8402-1bb057b304db&width=2000&userId=b5cfa95d-0fdc-4653-8882-18e28aaae8e9&cache=v2"
                alt="backImg"
              ></img>
              <input
                className="page1"
                type="text"
                placeholder="Email"
                onfocus="this.placeholder=''"
                onblur="this.placeholder = 'email'"
              />
//               <input
//                 className="page1"
//                 type="password"
//                 placeholder="password"
//!
//                 onChange={inputValue('password')}
//               ></input>
//               <button className="page1 button" onClick={handleSignin}>LOGIN</button>

                onfocus="this.placeholder=''"
                onblur="this.placeholder = 'password'"
                onChange={inputValue('password')}
              />
              <button className="page1 button" onClick={handleSignin}>LOGIN</button>

              <button
                className="page1 button"
                id="sign-btn"
                onClick={signUpModalOpen}
              >
                SIGN UP
              </button>
              <div id="find-Btn" onClick={findModalOpen}>
                아이디 / 비밀번호 찾기
              </div>
            </div>
          </section>
        </body>
        </form>
        {isOpen ? <SignUpModal signUpModalOff={ModalOff} /> : null}
        {isOpenFind ? <FindInfo findModalOff={ModalOff} /> : null}
      </center>
    </div>
  );
}
