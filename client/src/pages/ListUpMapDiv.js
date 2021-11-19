import React, { useEffect, useState } from "react";
const { kakao } = window;
//! import axios from "axios";
// 아이디 닉네임 비밀번호 비밀번호 확인 이름 휴대폰

//더미 데이터만 완성해서 보여주기 , 서버 연결해서 보여주기

export default function MapDiv({ myCurAdd, setMyCurAdd, userInfo }) {
  let points = [];

  userInfo.forEach((e) => points.push([e.lat, e.lng]));

  const getCentroid = (points) => {
    const count = points.length;
    const centerLat = points.reduce((p, c) => p + c[0], 0) / count;
    const centerLon = points.reduce((p, c) => p + c[1], 0) / count;
    return {
      x: centerLat,
      y: centerLon,
    };
  };

  let center = getCentroid(points);

  useEffect(() => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(myCurAdd[0], myCurAdd[1]), // 지도의 중심좌표
        level: 9, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    var positions = [];

    userInfo.forEach((e) => {
      positions.push({
        title: `${e.username}`,
        latlng: new kakao.maps.LatLng(Number(e.lat), Number(e.lng)),
        image: e.image,
      });
    });

    //* 중심좌표 렌더부분
    var centerPint = new kakao.maps.LatLng(center.x, center.y);

    var circle = new kakao.maps.Circle({
      center: centerPint, // 원의 중심좌표 입니다
      radius: 1000, // 미터 단위의 원의 반지름입니다
      strokeWeight: 5, // 선의 두께입니다
      strokeColor: "#75B8FA", // 선의 색깔입니다
      strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle: "dashed", // 선의 스타일 입니다
      fillColor: "#CFE7FF", // 채우기 색깔입니다
      fillOpacity: 0.8, // 채우기 불투명도 입니다
    });

    // var circleMarker = new kakao.maps.Marker({
    //   position: centerPint, // 마커를 표시할 위치
    // });

    circle.setMap(map);

    var middleContent = `<div style="margin-right:10em"><img style="width:8em; margin-top: 0.1em; margin-rigth:20em; margin-bottom:2em" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F229217dc-0928-4f3f-b147-1439fb80234a%2Fmeet.png?table=block&id=e1a97111-770d-47f0-9bfd-d6d48c997c41&spaceId=34b2f1fd-9d82-4494-8402-1bb057b304db&width=2000&userId=b5cfa95d-0fdc-4653-8882-18e28aaae8e9&cache=v2" /><div /></div>`;

    // 커스텀 오버레이를 생성합니다
    var customOverlay = new kakao.maps.CustomOverlay({
      map: map,
      position: centerPint,
      content: middleContent,
      yAnchor: 1,
    });

    for (var i = 0; i < positions.length; i++) {
      // var content = `<div class ="label" style="color: #484d8b; background-color: white; padding: 2px; border: 2px solid rgb(255, 217, 0); border-radius: 30px; font-size: 15px; line-height: 1.8em; width: 4em; text-align: center;margin: auto;"><span class="left"></span><span class="center">${positions[i].title}</span><span class="right"></span></div><img style="width:2em; margin-top: 0.3em; margin-left: 0.9em" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9a12b333-7290-40f8-94f8-5a5cf0be6a58%2FfreindsMark.png?table=block&id=b61435fb-5ba1-4612-9e08-ec31098aa049&spaceId=34b2f1fd-9d82-4494-8402-1bb057b304db&width=2000&userId=b5cfa95d-0fdc-4653-8882-18e28aaae8e9&cache=v2" />`;
      var content = `<div style="margin:auto"><span class="left"><img style="width:3em; border-radius: 3em; border: 2px solid rgb(255, 217, 0);" src="${positions[i].image}"><span class="right"></span></div><img style="width:2em; margin-top: 0.1em;margin-left:0.5em" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9a12b333-7290-40f8-94f8-5a5cf0be6a58%2FfreindsMark.png?table=block&id=b61435fb-5ba1-4612-9e08-ec31098aa049&spaceId=34b2f1fd-9d82-4494-8402-1bb057b304db&width=2000&userId=b5cfa95d-0fdc-4653-8882-18e28aaae8e9&cache=v2" /></div>`;
      // 마커를 생성합니다
      var marker = new kakao.maps.CustomOverlay({
        map: map,
        position: positions[i].latlng, // 마커를 표시할 위치
        content,
      });
    }

    map.setCenter(centerPint);
  });

  return <div id="map"></div>;
}
