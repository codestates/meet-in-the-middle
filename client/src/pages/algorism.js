export const getCenter = (makers, algorithm) => algorithm(makers);
export const basicCenterAlorithm = (markers) => {
  const count = markers.length;
  const centerLat = markers.reduce(((p, c) => p + c.getPosition().getLat()), 0) / count;
  const centerLon = markers.reduce(((p, c) => p + c.getPosition().getLng()), 0) / count;
  return {
    lat: centerLat,
    lon: centerLon,
  };
};

// export default {
//   getCenter,
//   basicCenterAlorithm,
// };

if (markers.length > 0) {
    const centerData = getCenter(markers, basicCenterAlorithm);
    const centerLat = centerData.lat;
    const centerLon = centerData.lon;
    const center = new window.kakao.maps.LatLng(centerLat, centerLon);
    const places = new window.kakao.maps.services.Places();

    places.categorySearch(code, callback, {
      location: center,
      radius: 5000,
    });
  }
}

// setMarkers = (pointArr) => {
//     const { map, categoryCode, categoryIndex } = this.state;

//     const markers = pointArr.map((v) => {
//       const lat = v.y;
//       const lon = v.x;
//       const content = `<div class ="label" style="color: #484d8b; background-color: white; padding: 2px; border: 1px solid #484d8b; border-radius: 30px; font-size: 12px; line-height: 12px"><span class="left"></span><span class="center">${v.name}</span><span class="right"></span></div>`;
//       const pointPosition = new window.kakao.maps.LatLng(lat, lon);
//       const point = new window.kakao.maps.CustomOverlay({
//         map, // 마커를 표시할 지도
//         position: pointPosition, // 마커를 표시할 위치
//         content, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
//       });
//       return point;
//     });


//     const points = [];
//     for (let i = 0; i < arrLen; i += 1) {
//       const obj = {
//         name: name[i],
//         place: place[i],
//         x: x[i],
//         y: y[i],
//       };
//       pointArr.push(obj);
//     }

//     this.setMarkers(pointArr);
//   }

  const pointArr = [];
  userInfo.forEach((e) => points.push([e.lat, e.lng]));