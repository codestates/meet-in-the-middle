/*global kakao*/
import React, { useEffect, useState } from "react";
const { kakao } = window;
//! import axios from "axios";
// 아이디 닉네임 비밀번호 비밀번호 확인 이름 휴대폰

//더미 데이터만 완성해서 보여주기 , 서버 연결해서 보여주기

export default function MapDiv({ curAdd, myCurAdd, setMyCurAdd }) {
  const [inputAdd, setInputAdd] = useState([37.541, 126.986]);
  let add = curAdd ? curAdd : null;

  useEffect(() => {
    let markers = [];

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setInputAdd([position.coords.latitude, position.coords.longitude]);
        // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
      });
    }

    var imageSrc =
        "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd1f712bb-571c-4481-b014-9fefb0995da2%2Fstart.png?table=block&id=f06f9cb2-93ca-4300-8bf1-df74e97ba9f8&spaceId=34b2f1fd-9d82-4494-8402-1bb057b304db&width=2000&userId=b5cfa95d-0fdc-4653-8882-18e28aaae8e9&cache=v2", // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(27, 69) };

    var markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    // console.log(inputAdd);
    setMyCurAdd([inputAdd[0], inputAdd[1]]);

    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(inputAdd[0], inputAdd[1]), // 지도의 중심좌표
        level: 10, // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    if (add) {
      console.log(curAdd);

      geocoder.addressSearch(add, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          setMyCurAdd([result[0].y, result[0].x]);
          var markerPosition = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: markerPosition,
            image: markerImage,
          });
          markers.push(marker);
          map.setCenter(coords);
        }
      });
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도

        setMyCurAdd([lat, lon]);

        var imageSrc =
            "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd1f712bb-571c-4481-b014-9fefb0995da2%2Fstart.png?table=block&id=f06f9cb2-93ca-4300-8bf1-df74e97ba9f8&spaceId=34b2f1fd-9d82-4494-8402-1bb057b304db&width=2000&userId=b5cfa95d-0fdc-4653-8882-18e28aaae8e9&cache=v2", // 마커이미지의 주소입니다
          imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
          imageOption = { offset: new kakao.maps.Point(27, 69) };

        var markerImage = new kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
          ),
          markerPosition = new kakao.maps.LatLng(lat, lon);

        var marker = new kakao.maps.Marker({
          map: map,
          position: markerPosition,
          image: markerImage,
        });
        markers.push(marker);
        const locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다

        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition);
      });

      function displayMarker(locPosition, message) {
        map.setCenter(locPosition);
      }
    }

    console.log(markers);

    // 지도에 마커를 표시합니다
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      var latlng = mouseEvent.latLng;

      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }

      console.log(markers);

      var marker = new kakao.maps.Marker({
        position: latlng,
        image: markerImage,
      });

      markers.push(marker);
      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setMap(map);
    });
  }, [add]);

  return <div id="map"></div>;
}
