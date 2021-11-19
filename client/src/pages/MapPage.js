import React, { useState, useEffect } from "react";
import MyProfileModal from "./MyProfileModal";
import MapDiv from "./mapDiv";
import PlusFriend from "./plusFriendModal";
import KakaoMapCurrent from "./test";
import userInfo from "../dummy";
import ListUpMapDiv from "./ListUpMapDiv";
import menuModal from "./menuModal";
const { kakao } = window;

//axios.defaults.withCredentials = true;

export default function MapPage({ logo, userinfo }) {
  //console.log(props);
  let curDeg = [37.365264512305174, 127.10676860117488];
  const [curAdd, setCurAdd] = useState("");
  const [isOpenMyProfile, setOpenMyProfile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [address, setAddress] = useState("");
  const [onPlus, setOnPlus] = useState(false);
  const [friendList, setfriendList] = useState([]);
  const [myCurAdd, setMyCurAdd] = useState([]);
  const [meetOn, setMeetOn] = useState(false);

  const [attend, setAttend] = useState([]);

  // const [test, setTest] = useState(false);

  friendList.map((e) => console.log(e));

  // const testBtn = () => {
  //   setTest(true);
  // };

  const searchInputOn = () => {
    setIsSearch(true);
  };

  const searchBtnOn = () => {
    setCurAdd(address);
  };

  const inputAdd = (e) => {
    setAddress(e.target.value);
  };

  const myProfileModalOpen = () => {
    setOpenMyProfile(true);
  };

  const myProfileModalOff = () => {
    setOpenMyProfile(false);
  };

  const plusBtnOn = () => {
    setOnPlus(true);
    setOpenMyProfile(false);
  };

  const plusBtnOff = () => {
    setOnPlus(false);
  };

  const meetBtnOn = () => {
    setMeetOn(true);
  };

  const meetBtnOff = () => {
    setMeetOn(false);
  };

  const togle = (e) => {
    console.log(e);
  };

  return (
    <div className="main">
      {/* <button onClick={testBtn}>주소 불러오기</button> */}
      <section className="top">
        <div className="logo" id="mapPage-png">
          <img
            id="top-bar-icon"
            src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4faf4b54-71c2-426b-9c2d-32af8d906228%2Ficon.png?table=block&id=2fcd1510-28b2-45c9-b3f5-3a28d70dcf40&spaceId=34b2f1fd-9d82-4494-8402-1bb057b304db&width=2000&userId=b5cfa95d-0fdc-4653-8882-18e28aaae8e9&cache=v2"
            alt="icon
          "
          />
        </div>
        <div id="top-bar">
          {" "}
          <img
            id="top-bar-horiz"
            src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc6d83dd2-fc90-4a4e-8862-4e01888c4213%2Fhorizon-logo.png?table=block&id=4d9e8394-e262-404f-8d02-47db9e43fee8&spaceId=34b2f1fd-9d82-4494-8402-1bb057b304db&width=2000&userId=b5cfa95d-0fdc-4653-8882-18e28aaae8e9&cache=v2"
            alt="horiz
          "
          />
        </div>
        <div id="logOutBtn">Log out</div>
        <img
          id="top-bar-my"
          onClick={myProfileModalOpen}
          src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbd6dba21-ec32-47e2-8070-d49a7d0b7edf%2Ficon.png?table=block&id=90af43aa-02f0-40cb-9a42-47cceda1d49a&spaceId=34b2f1fd-9d82-4494-8402-1bb057b304db&width=2000&userId=b5cfa95d-0fdc-4653-8882-18e28aaae8e9&cache=v2"
          alt="myPage
          "
        />
      </section>
      {/* <menuModal /> */}
      {isOpenMyProfile ? (
        <MyProfileModal myProfileModalOff={myProfileModalOff} />
      ) : null}
      {onPlus ? (
        <PlusFriend
          plusBtnOff={plusBtnOff}
          friendList={friendList}
          setfriendList={setfriendList}
        />
      ) : null}

      <body className="inner">
        <div className="side">
          <div id="searchDiv">
            <input
              type="text"
              id="searchInput"
              onChange={(e) => inputAdd(e)}
              placeholder="주소 검색"
            />
            <div id="searchBtnDiv">
              <img
                id="searchBtn"
                src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa923dcd3-8f28-4976-a20a-ce78bea2a696%2FsearchBtn.png?table=block&id=0ee8122c-4005-42aa-8370-720b49bb63f5&spaceId=34b2f1fd-9d82-4494-8402-1bb057b304db&width=2000&userId=b5cfa95d-0fdc-4653-8882-18e28aaae8e9&cache=v2"
                alt="searchBtn"
                onClick={searchBtnOn}
              />
            </div>
          </div>
          <ul>
            {userInfo.map((e) => (
              <li>
                <div className="friendListDiv">
                  <img src={e.image} className="profileImg" alt="" />
                  <div className="freindDIv">{e.username}</div>
                  <div className="sliceDiv">
                    <label class="switch">
                      <input type="checkbox" onClick={togle(e)} />
                      <span class="slider round"></span>
                    </label>
                  </div>
                </div>
              </li>
            ))}
            <div className="friendListDiv" onClick={plusBtnOn}>
              <img
                id="plusBtn"
                src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F89fa1eb6-4e67-4ce8-8779-fd07c83ec002%2FplusBtn.png?table=block&id=279a2423-759b-4997-9c10-4ed7a2d5d71a&spaceId=34b2f1fd-9d82-4494-8402-1bb057b304db&width=2000&userId=b5cfa95d-0fdc-4653-8882-18e28aaae8e9&cache=v2"
                alt="plusBtn"
              />
              <div className="plusMsg">친구 추가</div>
            </div>
          </ul>
          <div className="meetBtnDiv" onClick={meetBtnOn}>
            <img
              className="letsMeetBtn"
              src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5214f122-f39c-414f-8791-19a013a0b3bb%2Flets-blue1.png?table=block&id=37426a87-2085-479c-8678-243e37dddcdf&spaceId=34b2f1fd-9d82-4494-8402-1bb057b304db&width=2000&userId=b5cfa95d-0fdc-4653-8882-18e28aaae8e9&cache=v2"
              alt="letsMeet"
            />
          </div>
          <div id="reMeetBtn" onClick={meetBtnOff}>
            - Re Meet -
          </div>
        </div>
        <div className="map">
          {/* {isOpenMyProfile ? (
            <MyProfileModal myProfileModalOff={myProfileModalOff} />
          ) : null} */}
          <div>
            {meetOn ? (
              <ListUpMapDiv
                myCurAdd={myCurAdd}
                setMyCurAdd={setMyCurAdd}
                userInfo={userInfo}
              />
            ) : (
              <MapDiv
                curAdd={curAdd}
                myCurAdd={myCurAdd}
                setMyCurAdd={setMyCurAdd}
              />
            )}
          </div>
        </div>
      </body>
    </div>
  );
}
