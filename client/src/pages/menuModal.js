import React from "react";
//! import axios from "axios";
// 아이디 닉네임 비밀번호 비밀번호 확인 이름 휴대폰

export default function menuModal() {
  return (
    <div className="modal" id="signUpModal">
      <h3>회원 정보</h3>
      <div>이미지</div>
      <fieldset>
        <span>이메일</span>
        <input type="text"></input>
      </fieldset>
      <fieldset>
        <span>비밀번호</span>
        <input type="password"></input>
      </fieldset>
      <fieldset>
        <span>비밀번호 확인</span>
        <input type="password"></input>
      </fieldset>
      <fieldset>
        <span>이름</span>
        <input type="text"></input>
      </fieldset>
      <fieldset>
        <span>휴대폰</span>
        <input type="number" onKeyup="value=value.replace(/[^0-9]/g,'');" />
      </fieldset>
      {/* <div className="button" onClick={myProfileModalOff}> */}
      {/* 닫기
      </div> */}
    </div>
  );
}
