import React, { useEffect, useRef } from "react";
import { fancyRestaurants } from "../restaurantInfo/restaurantInfo";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
const { kakao, innerHeight } = window;

const mapStyle = {
  width: "100%",
  height: "100%",
};

function KakaoMap({ id }) {
  const mapContainer = useRef();
  useEffect(() => {
    kakao.maps.load(() => {
      let el = mapContainer.current;
      let map = new kakao.maps.Map(el, {
        center: new kakao.maps.LatLng(
          fancyRestaurants[id].lat,
          fancyRestaurants[id].lng
        ),
      });

      let markerPosition = new kakao.maps.LatLng(
        fancyRestaurants[id].lat,
        fancyRestaurants[id].lng
      );

      let markers = [];

      // 마커를 생성합니다
      markers.push(new kakao.maps.Marker({ position: markerPosition }));

      // 마커가 지도 위에 표시되도록 설정합니다
      markers.map((marker) => marker.setMap(map));

      let iwContent = `<div style=" padding:8px; width:160px; display:flex">
      <div>
      <div style="font-weight:bold">
        ${fancyRestaurants[id].name} 
      </div>
      <div>
        ${fancyRestaurants[id].category}
      </div>
      <div>
        추천메뉴: ${fancyRestaurants[id].recommend}
      </div>
      </div>
      </div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(
          fancyRestaurants[id].lat,
          fancyRestaurants[id].lng
        ); //인포윈도우 표시 위치입니다

      // 인포윈도우를 생성합니다
      let infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent,
      });

      infowindow.open(map);
    });
  }, [id]);

  return (
    <div style={{ height: innerHeight / 3 }}>
      <div id="map" style={mapStyle} ref={mapContainer}></div>
    </div>
  );
}
export default KakaoMap;
