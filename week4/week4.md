# 창의학기제 웹 프론트엔드(4주차)

### 학습내용
#### CSS의 전반적인 이해   
[생활코딩](https://www.inflearn.com/course/css-%EA%B8%B0%EB%B3%B8%EB%B6%80%ED%84%B0-%ED%99%9C%EC%9A%A9%EA%B9%8C%EC%A7%80/)을 학습하며 CSS에 대한 전반적인 이해를 하였다. = 
##### 선택자     
HTML 태그를 선택하는 방법   
- 태그 선택자 ( 태그 )   
- 클래스 선택자 ( .클래스 )    
- 아이디 선택자 ( #아이디 )
- 자식 선택자 ( 부모 > 자식 )   
- nth - child ( n )    
   
[CSS 선택자 연습 사이트](http://flukeout.github.io/)에서 연습했다.  
<img width="1328" alt="스크린샷 2020-04-11 오후 6 34 51" src="https://user-images.githubusercontent.com/52201658/79040406-30a46080-7c23-11ea-92f2-09b4b6ef0884.png">
  

##### 박스 모델
[박스 모델](https://github.com/baeharam/Must-Know-About-Frontend/blob/master/Notes/css/box-model.md)을 보고 공부하였다.   

##### 마진 겹침
[마진 겹침](https://github.com/baeharam/Must-Know-About-Frontend/blob/master/Notes/css/margin-collapsing.md)을 참고하여 공부하였다.    
- 블록 레벨 요소 두개가 인접할 때 발생한다.   
- 부모태그의 시각적 효과가 없어지면 부모태그와 마진태그의 마진중에 큰쪽의 마진값으로 상쇄된다.
- 인접한 두 박스요소중 하나가 시각적 요소가 없으면 두 박스 요소중에 큰 마진으로 상쇄된다.   

##### Font   
- font-size는 em을 사용하자.
- color : rgb(123,2,1) 이런 식으로 사용 가능   
- text-align: 텍스트를 배치하는 방법
- font-family : 글꼴 지정   
- font-weight: bold;
- line-height: 1.2(default)   
- web font : 구글 웹폰트 사용해도 된다, 웹폰트 제너레이터로 폰트를 만든 다음에 사용해도 문제 없음.

##### Flex   
새로운 방식의 정렬 방법   
가장 많이 쓰이며 편리하다.   

[CSS Flex(Flexible Box) 완벽 가이드](https://heropy.blog/2018/11/24/css-flexible-box/)를 보고 공부   
[Flex를 게임으로 배우는 사이트](https://flexboxfroggy.com/#ko)를 통해 실습   
<img width="1762" alt="스크린샷 2020-04-11 오후 6 32 59" src="https://user-images.githubusercontent.com/52201658/79040372-ee7b1f00-7c22-11ea-997d-076ec85461aa.png">

[Flexbox로 만들 수 있는 10가지 레이아웃](https://d2.naver.com/helloworld/8540176)을 통해 공부   

##### 반응형 디자인   
웹사이트에 접속하는 기기의 크기에 따라 다른 형태의 웹사이트를 보여주는 것.   
```css
@media (max-width: 769px) {
 /* 원하는 코드 */
}
```   
이런 방식으로 사용한다.   
요새는 Mobile First CSS 방식이 유행이라고 한다.   


### Project   
![socar result](https://user-images.githubusercontent.com/52201658/79069629-a6cfc280-7d0a-11ea-8e59-6fa963ecc76c.png)

##### Purpose
똑같이 쏘카 페이지를 클로닝 하면서 CSS를 다루는 능력을 향상시키고자 했다.

##### TechSet
Language: HTML5, CSS, JavaScript ES6

##### Comments
- 거의 모든 정렬을 Flex로 진행한 것 같다.   
- 이제 어느 정도의 정렬이 Flex로 가능하다. 하지만 이게 맞는 방식인지를 모르겠다.   
- Carousel 기능을 순수 JavaScript로 직접 구현했다. 코드 리팩토링이 필요하다.   
- 원래 PC -> Mobile 순서로 디자인을 진행하려고 계획하고 PC버전 마크업을 다 한 뒤 인터넷을 뒤져보니 mobile first css라는 방식이 대세인 것 같아서 다음부터 모바일 먼저 마크업 한뒤, 피시를 마크업 해야겠다.   
- CSS를 Naming할 때, 규칙을 정해야 겠다는 생각을 한다.   
- 그냥 내 마음가는 대로 이름을 짓다보니, 나중에 내가 어떤 아이에게 어떤 이름을 주었는지 기억이 나지 않아 매번 찾아댕겼다.   
- 검색해보니, CSS Naming Rule이 있었다. [BEM 방법론](https://webclub.tistory.com/263)   
- 실제 개발 환경에서는 Component단위로 개발하니, CSS-in-JS에 대해 더 아는게 중요하다고 생각된다.   


##### Study Result

