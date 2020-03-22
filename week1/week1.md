# 창의학기제 웹 프론트엔드(1주차)

### 학습내용
-  “리액트를 다루는 기술” 서적 p.429 ~ p.470를 공부해 Redux에 대해 이해했다.   
-  “러닝 자바스크립트” 서적 Scope 부분을 보고 ES6에 새로 추가된 let, const 변수에 대해 이해하고, 호이스팅, 클로저에 대해 공부하였다.   
-  React의 Hooks중에 UseEffect에 대해 부족하다고 느껴 [UseEffect 완벽 가이드 번역본](https://rinae.dev/posts/a-complete-guide-to-useeffect-ko) 문서를 보고 UseEffect 뿐만 아니라, UseMemo, UseCallback Hooks에 대해서도 심도깊은 이해를 했다.  
-  위의 내용을 공부하고, 적용하기 위해서 학점 계산기 Web App을 만들었다.   

### 학습 결과 
### 학점 계산기 WEB APP

#### Purpose
React의 상태관리 라이브러리 Redux를 사용하고, 연습하기 위해 프로젝트를 시작했습니다.

#### TechSet
Language: Javascript ES6, JSX   
Library: React, Redux, Styled-Components, Semantic UI React   

#### Remarks
디자인 : Velopert님의 [To-do-List](https://react.vlpt.us/mashup-todolist/)를 참고했습니다.

#### Comments
1. 불변성 유지를 쉽게하기 위한 Library인 Immer을 사용하고 싶었지만, 불변성 유지가 어려울 정도의 깊이를 가지고 있는 객체가 없어서 스킵.
기회가 된다면 써보고 싶다.   
2. Container Componenet를 만들었으면 제발 App.js에 적용하자 (제발!)   
3. 함수의 호출과 선언을 구분해야 한다. (ex func(), () => {func()} )

#### Study Result

##### 리덕스를 이용한 상태관리 도식도 
![Redux-7](https://user-images.githubusercontent.com/52201658/75629458-9285a980-5c25-11ea-90bd-e1ec6bbab7df.jpg)



