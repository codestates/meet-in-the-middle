/*global kakao*/
import { useEffect } from "react";
const { kakao } = window;

export default function Meet({curAdd, userInfo}) {
	let add = curAdd ? curAdd : "태평로1가 31"
	useEffect(() => {
		let container = document.getElementById("map");
    		let options = {
      		center: new kakao.maps.LatLng(37.541, 126.986),
      		level: 10,
    	};


    	const map = new kakao.maps.Map(container, options);
    
	 userInfo.forEach((el) => {
      		new kakao.maps.Marker({
        		map: map,
        		position: new kakao.maps.LatLng(el.lat, el.lng),
        		title: el.username,
      		});
    	});



	



  }, [add])

  return <div id="map"></div>;
}