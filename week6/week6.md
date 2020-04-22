# 창의학기제 웹 프론트엔드(6주차)

### 디자인 패턴 선택     
어떤 패턴으로 설계할까 고민을 많이 했다.   
아래와 같은 두가지 패턴을 고려했다.   
- MVC   
- FLUX   

##### MVC 패턴   
MVC 패턴은 Model, View, Controller 이 세가지로 이루어진다.   
MVC 패턴에서 컨트롤러(Controller)는 모델(Model)의 데이터를 조회하거나 업데이트하는 역할을 한다.    
모델(Model)의 변화는 뷰(View)에 반영한다.    
<br/>
또한, 사용자는 뷰를 통해 데이터를 입력하는데 사용자의 입력은 모델에 영향을 주기도 한다.    
따라서 이와 같은 데이터 흐름은 다음과 같이 그림으로 표현할 수 있다.   

<img width="651" alt="MVC" src="https://user-images.githubusercontent.com/52201658/80009158-a356eb00-8503-11ea-934f-49465a02a5a4.png">   

MVC 패턴은 대부분의 어플리케이션이 MVC로 만들어져 있을 정도로 대중화된 패턴이다.   
하지만, MVC 패턴은 아래와 같은 단점을 가지고 있다.   
- 대규모 애플리케이션에서는 MVC가 너무 빠르게, 너무 복잡해진다.  
- 구조가 너무 복잡해지면 새 기능을 추가할 때마다 크고 작은 문제가 생기며 코드의 예측이 어려워진다.   


<img width="696" alt="complex_mvc" src="https://user-images.githubusercontent.com/52201658/80009818-8a9b0500-8504-11ea-8bf7-40d48b340639.png">

##### FLUX 패턴   
FLUX 패턴은 MVC패턴에 비해서 생소하다.   
FLUX 패턴은 페이스북 개발팀이 만들었으며, MVC의 문제점을 해결하기 위해 고안하였다.   
FLUX 애플리케이션은 크게 세 부분으로 구성된다.    
- 디스패처(Dispatcher)    
- 스토어(Store)    
- 뷰(View)   
<br/>
단, 여기서 말하는 뷰는 MVC의 뷰와는 달리 스토어에서 데이터를 가져오는 한편 데이터를 자식 뷰로 전달하기도 하는 일종의 뷰-컨트롤러로 보아야 한다.  
<br/>
Flux 아키텍처의 가장 큰 특징으로는 '단방향 데이터 흐름(unidirectional data flow)'을 들 수 있다.       
데이터의 흐름은 언제나 디스패처(Dispatcher)에서 스토어(Store)로, 스토어에서 뷰(View)로, 뷰에서 액션(Action)으로 다시 액션에서 디스패처로 흐른다.  

<img width="755" alt="flux" src="https://user-images.githubusercontent.com/52201658/80010468-6e4b9800-8505-11ea-9a03-e25719192a97.png">

FLUX 패턴의 장점 : 데이터가 단방향으로 흘러 데이터의 변화를 예측하기 쉽다.   
