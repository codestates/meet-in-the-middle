
import React, { useEffect, useState } from "react";
import userInfo from "../dummy.js";
import axios from "axios";

// 아이디 닉네임 비밀번호 비밀번호 확인 이름 휴대폰

axios.defaults.withCredentials = true;

export default function MyProfileModal({ myProfileModalOff }) {
  const [findInfo, setfindInfo] = useState({
    id: '',
    image: '',
    email: '',
    userName: '',
    nickName: '',
    password: '',
    phone: ''
  });

  const [changeInfo, setchangeInfo] = useState({
    id: '',
    nickName: '',
    password: '',
    phone: ''
  });

  const myInfo = async () => {
    await axios.get('https://localhost:4000/auth').then((res) => {
      setfindInfo(res.data.data.needInfo);
      //console.log(findInfo);
    });
  };

  const inputValue = (key) => (e) => {
    setchangeInfo({...changeInfo, [key]: e.target.value});
  };
  
  const handleChangeinfo = () => {
    for(let prop in changeInfo){
      if(changeInfo[prop] === '') {
        changeInfo[prop] = findInfo[prop];
      }
    }
    console.log(changeInfo);
    axios.post('https://localhost:4000/userinfo', changeInfo,
      {headers: {'Content-Type': 'application/json'}, withCredentials: true}
    )
  };

  const handlewithdrawal = () => {
    //console.log(findInfo);
    axios.post('https://localhost:4000/signwithdrawal', findInfo,
      {headers: {'Content-Type': 'application/json'}, withCredentials: true}
    )
  };

  return (
    <div className="modal">
      <div className="close-btn" onClick={myProfileModalOff}>
        X
      </div>

      <h3 onClick={myInfo}>회원 정보</h3>
      <div id="myPhotoDiv">
        <img
          id="profile-img"
          src="https://pbs.twimg.com/profile_images/549171896013438979/rqtU6Cvn_400x400.png"
          alt="profile-img"
onChange={inputValue('image')}
        />
      </div>
      <fieldset>
        <span>이름: {findInfo.userName}</span>
      </fieldset>
      <fieldset>
        <span>이메일: {findInfo.email}</span>
      </fieldset>
      <fieldset>
        <input className="info-modal-list" type="number" type="text" placeholder={findInfo.nickName} onChange={inputValue('nickName')}></input>
      </fieldset>
      <fieldset>
        <input className="info-modal-list" type="password"  placeholder="password" onChange={inputValue('password')}></input>
      </fieldset>
      <fieldset>
<input className="info-modal-list" type="password"  placeholder="password confirm"></input>
      </fieldset>
      <fieldset>
        <input
          className="info-modal-list"
          type="number"
          type="text"
          placeholder={findInfo.phone} onChange={inputValue('phone')}
        ></input>
      </fieldset>
      <button className="modal-btn" onClick={handleChangeinfo}>회원정보 수정</button>
      <div id="myinfo-btn2">
        <span className="myinfo-btn" onClick={() => this.handleSignout}><a href={'/'}>로그아웃</a></span>
        <span> / </span>
        <span className="myinfo-btn" onClick={handlewithdrawal}><a href={'/'}>회원탈퇴</a></span>
      </div>
    </div>
  );
}
