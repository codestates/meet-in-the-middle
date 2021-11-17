/*global kakao*/ 
import React, { useEffect, useState } from "react";
import KakaoMap from "./KakaoMap.js"
import MapDiv from "./MapDiv";
import userInfo from "./dummydata.js"
import Meet from "./Meet"




export default function MapPage() {
  const [curAdd, setCurAdd] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [address, setAddress] = useState("");
  const [meetOn, setMeetOn] = useState(false)

  useEffect(() => {
    KakaoMap();
  }, [])

  const searchInputOn = () => {
    setIsSearch(true);
  };

  const searchBtnOn = () => {
    setCurAdd(address);
  };

  const inputAdd = (e) => {
    setAddress(e.target.value);
  };

  const meetBtnOn = () =>{
    setMeetOn(true)
  }





  

// console.log(userInfo)

  return (
    <div className="main">
      <section className="top">상단 bar</section>
      <body className="inner">
        <div className="side">
          <div className="myinfo">내정보</div>
          {isSearch ? (
            <div>
              <input type="text" onChange={(e) => inputAdd(e)} />
              <button onClick={searchBtnOn}>검색</button>
            </div>
          ) : (
            <button onClick={searchInputOn}>주소 검색</button>
          )}
          <ul>
            <li>내 위치</li>
            <li>{userInfo.map((el) => {return <li key={el.id}>{el.username}</li>})}</li>
          </ul>
          <button >re meet</button>
          <button onClick={meetBtnOn}>meet</button>
            {/* <Meet curAdd={curAdd} friend={friend} userInfo={userInfo}/> */}
        </div>
        <div className="map">
          <div>
            <div id="map" style={{ width: "500px", height: "400px" }}>
            <div>
            {/* <div id="map"></div> */}
            {meetOn ? (<Meet curAdd={curAdd} userInfo={userInfo}/>) : (<MapDiv curAdd={curAdd} />)}
          </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}