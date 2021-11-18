import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
// 아이디 닉네임 비밀번호 비밀번호 확인 이름 휴대폰

axios.defaults.withCredentials = true;

export default function SignUpModal({ signUpModalOff }) {
  const [userinfo, setuserinfo] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    userName: '',
    nickName: '',
    birth: '',
    phone: ''
  });
  
  const navigate = useNavigate();
  
  const inputValue = (key) => (e) => {
    setuserinfo({...userinfo, [key]: e.target.value});
  }
  
  const handleSignup = () => {
    const user = {email: userinfo.email, password: userinfo.password, userName: userinfo.userName,
      nickName: userinfo.nickName, birth: userinfo.birth, phone: userinfo.phone};
  
    if(!user.email || !user.password || !user.userName || !user.nickName || !user.birth || !user.phone) {
      alert('모든 항목은 필수입니다')
    }
    //console.log(user.email);
    axios.post('https://localhost:4000/signup', user,
      {headers: {'Content-Type': 'application/json'}, withCredentials: true}
    )
    .then((res) => {
      if(res.payload.success) {
        navigate('/');
      }
    })
    .catch((err) => {
      console.log(err);
    })
  };
  return (
    <div>
      <div className="modal" id="signUpModal">
        <div className="close-btn" onClick={signUpModalOff}> x </div>
        <h3 className="singup-btn">SING UP</h3>
        <fieldset>
          <input className="modal-list" type="text" placeholder="Email" onChange={inputValue('email')}></input>
        </fieldset>
        <fieldset>
          <input className="modal-list" type="password" placeholder="password" onChange={inputValue('password')} ></input>
        </fieldset>
        <fieldset>
          <input className="modal-list" type="password" placeholder="password confirm" onChange={inputValue('passwordCheck')}></input>
        </fieldset>
        <fieldset>
          <input className="modal-list" type="text" placeholder="Name" onChange={inputValue('userName')}></input>
        </fieldset>
        <fieldset>
          <input className="modal-list" type="text" placeholder="Nick name" onChange={inputValue('nickName')}></input>
        </fieldset>
        <fieldset>
          <input className="modal-list" type="text" placeholder="Phone" onChange={inputValue('phone')}></input>
        </fieldset>
        <button className="modal-btn" onClick={handleSignup}>가입하기</button>
       <div className="button" onClick={signUpModalOff}>닫기 </div>
      <div className="blur"></div>
    </div>
    </div>
  );
}
