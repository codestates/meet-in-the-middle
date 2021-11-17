/*global kakao*/
import React, { useEffect } from "react";
const { kakao } = window;
//! import axios from "axios";
// 아이디 닉네임 비밀번호 비밀번호 확인 이름 휴대폰

export default function MapDiv({ curAdd  }) {
  //   console.log(curAdd);
  let add = curAdd ? curAdd : "태평로1가 31";
  let infos = []
  let markers = []

  //   console.log(add);
  useEffect(() => {
    console.log(add, "여기");
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 10, // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(add, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          content:
            '<div style="width:150px;text-align:center;padding:6px 0;">여기</div>',
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
	markers.push(marker)
	infos.push(infowindow)
	}
    });
    
    // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다

    	kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
		var latlng = mouseEvent.latLng;

		for (let i = 0; i < markers.length; i++) {
		  markers[i].setMap(null);
		}
		for (let j = 0; j < infos.length; j++) {
		  infos[j].setMap(null);
		}
	  
		var marker = new kakao.maps.Marker({
		  // 지도 중심좌표에 마커를 생성합니다
		  position: latlng,
		});
	  
		const infowindow = new kakao.maps.InfoWindow({
		  content: '<div style="padding:5px;">여기???????</div>',
		});
	  
		infos.push(infowindow);
		// 인포윈도우를 마커위에 표시합니다
		infowindow.open(map, marker);
	  
		markers.push(marker);
		// 마커 위치를 클릭한 위치로 옮깁니다
		marker.setMap(map);
 
    });
  }, [add]);

  return <div id="map"></div>;
}