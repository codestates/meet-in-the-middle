/*global kakao*/ 
const { kakao } = window;


export default function KakaoMap () {

	let infos = [];

	var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
	mapOption = { 
	    center: new kakao.maps.LatLng(37.541, 126.986), // 지도의 중심좌표
	    level: 10 // 지도의 확대 레벨 
	}; 
	
	var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
	
	// HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
	if (navigator.geolocation) {
	
	// GeoLocation을 이용해서 접속 위치를 얻어옵니다
	navigator.geolocation.getCurrentPosition(function(position) {
	    
	    var lat = position.coords.latitude, // 위도
		lon = position.coords.longitude; // 경도
	    
	    var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
		message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
	    
	    // 마커와 인포윈도우를 표시합니다
	    displayMarker(locPosition, message);
		
	  });
	
	} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
	
	var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
	    message = 'geolocation을 사용할수 없어요..'
	    
	displayMarker(locPosition, message);
	}
	
	// 지도에 마커와 인포윈도우를 표시하는 함수입니다
	function displayMarker(locPosition, message) {
	
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({  
	    map: map, 
	    position: locPosition
	}); 
	
	var iwContent = message, // 인포윈도우에 표시할 내용
	    iwRemoveable = true;
	
	// 인포윈도우를 생성합니다
	var infowindow = new kakao.maps.InfoWindow({
	    content : iwContent,
	    removable : iwRemoveable
	});
	
	// 인포윈도우를 마커위에 표시합니다 
	infowindow.open(map, marker);
	
	marker.setMap(map);
	infos.push(infowindow)

	function removeinfo() {
		for ( var i = 0; i < infos.length; i++ ) {
			infos[i].setMap(null);
		}   
		infos = [];
	}
	
	// 지도에 클릭 이벤트를 등록합니다
	// 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
	kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
	    removeinfo(infos)
	    // 클릭한 위도, 경도 정보를 가져옵니다 
	    var latlng = mouseEvent.latLng; 
	    
	    // 마커 위치를 클릭한 위치로 옮깁니다
	    marker.setPosition(latlng);
	    

	    var newmarker = new kakao.maps.LatLng(latlng.getLat(), latlng.getLng()), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
	    message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
	    displayMarker(newmarker, message);
	});
	}
	
}