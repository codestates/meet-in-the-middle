import React, { useState } from "react";
import axios from "axios";

export default function FindInfo({ findModalOff }) {
  const [userinfo, setuserinfo] = useState({
    userName: '',
    birth: '',
    phone: ''
  });

  const inputValue = (key) => (e) => {
    setuserinfo({...userinfo, [key]: e.target.value});
  }

  const findInfo = () => {
    const user = {userName: userinfo.userName, birth: userinfo.birth, phone: userinfo.phone};
  
    if(!user.userName || !user.birth || !user.phone) {
      alert('모든 항목은 필수입니다')
    }
    axios.post('https://localhost:4000/findlongininfo', user,
      {headers: {'Content-Type': 'application/json'}, withCredentials: true}
    )
    .then((res) => {
      console.log(res);
    })
  }

  return (
    <div className="modal">
      <div className="close-btn" onClick={findModalOff}>
        X
      </div>
      <fieldset>
        <input className="modal-list" type="text" placeholder="Name"></input>
      </fieldset>
      <fieldset>
        <span>생년월일</span>
        <input className="modal-list" type="text" onChange={inputValue('birth')}></input>
      </fieldset>
      <fieldset>
        <input className="modal-list" type="number" placeholder="Phone"></input>
      </fieldset>
      <button className="modal-btn">아이디 / 비밀번호 찾기</button>
    </div>
  );
}
