# 창의학기제 웹 프론트엔드(3주차)

### 학습내용
##### 어떤 Map API를 사용할 것인가?
- T Map API : 전에 안드로이드 개발할 때 사용해봐서 익숙하다.   
- Kakao Map API : 써보지 않았지만 무료 검색 횟수가 많이 주어지고 Docs가 상세하다.   

결론 : Kakao Map API를 사용하기로 결정함

##### Kakao Map API 사용방법
[Kakao Map API 사용 가이드](http://apis.map.kakao.com/web/guide/)를 보고 따라서 진행하였다.   

##### 발생한 문제

- Kakao Map API는 Script 태그 형태로 불러와서 사용하는데, React 컴포넌트에서 사용하는 방법을 몰랐다.   
- 아래는 Kakao Map API Docs에서 제공하는 맵 띄우는 예시 코드이다.
```
<html>
<head>
	<meta charset="utf-8"/>
	<title>Kakao 지도 시작하기</title>
</head>
<body>
	<div id="map" style="width:500px;height:400px;"></div>
	<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 넣으시면 됩니다."></script>
	<script>
		var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};

		var map = new kakao.maps.Map(container, options);
	</script>
</body>
</html>
```
이거를 React에 적용하는 방법을 몰라 크게 애를 먹었다.   
내가 해결한 방법은 다음과 같다.   
- 우선 public/index.html 의 head 태그의 자식 요소로 
    ```
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 넣으시면 됩니다."></script>
    ```
    를 넣었다.
- 이 후, Map을 보여주는 Component인 src/components/KakaoMap.js 를 만들고 다음과 같이 코드를 작성하였다.   
```
import React, { useEffect, useRef } from "react";
const { kakao } = window; // window에 존재하는 kakao를 비구조화 할당해준다.

function KakaoMap() {
  const mapContainer = useRef(); // id가 Map인 div태그의 DOM 을 직접 건드리기 위해 useRef Hooks를 사용하였다.
  useEffect(() => {
    kakao.maps.load(() => {
      let el = document.getElementById("map");
      let map = new kakao.maps.Map(el, {
        center: new kakao.maps.LatLng(37.549503, 127.075174)
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      markers.map(marker => marker.setMap(map));
    });
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "700px",
        height: "630px",
        ref={mapContainer} // DOM을 직접 조작하기 위해 ref 속성을 추가해준다.
    ></div>
  );
}
export default KakaoMap;

```



### Purpose
React의 비동기 처리를 위한 라이브러리 Redux-Middleware를 사용하고, 연습하기 위해 프로젝트를 시작했습니다.

### TechSet
Language: Javascript ES6, JSX   
Library: React, Redux, Redux-Thunk, Styled-Components, Semantic UI React   

### Comments
- Redux Thunk middleware에 대해 처음에 이해하지 못해서 많이 힘들었던 프로젝트이다.   
- Redux Thunk에 대해 공부할 뿐만 아니라, Promise나 비동기 처리 등 JavaScript 기본기를 단단히 다지는 좋은 프로젝트였다.   
- UI가 마음에 들지 않는다. 나중에 CSS나 Styled-Components를 더 깊게 공부하고, 수정해보고 싶은 프로젝트이다.   
- 버그가 하나 터져서 찾는데 거의 5시간 이상이 걸린 프로젝트이다.   
- 그 버그는 default로 export한 함수를, 비구조화 할당을 통해 import해서 발생된 웃픈 버그였다.   

### Study Result
- 비동기처리에 대해 이전보다 깊게 이해하였다.
- Thunk 함수의 개념에 대해 다시 알아보는 시간이 되었다.
- 미들웨어의 작동 원리에 대해서 파악했다.
- CSS를 다시 공부해야 한다고 느끼게 한 프로젝트이다.
- 프로젝트에 투자한 절대적인 시간이 적지 않아서 리액트, 리덕스에 대해 이전보다 많이 익숙해졌다.



