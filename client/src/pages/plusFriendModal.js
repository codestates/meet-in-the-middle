import React, { useState } from "react";
//! import axios from "axios";

export default function PlusFriend({ plusBtnOff, friendList, setfriendList }) {
  return (
    <div className="modal">
      <div className="close-btn" onClick={plusBtnOff}>
        X
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <input className="modal-list" type="text" placeholder="Name"></input>
        </fieldset>
        <fieldset>
          <input
            className="modal-list"
            type="number"
            placeholder="Phone"
          ></input>
        </fieldset>
        <button className="modal-btn">친구 추가</button>
      </form>
    </div>
  );
}
