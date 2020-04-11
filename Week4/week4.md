# 창의학기제 웹 프론트엔드(2주차)

### 학습내용
##### 비동기 처리란 무엇인가?

[자바스크립트 비동기 처리와 콜백 함수](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)   
[자바스크립트 Promise 쉽게 이해하기](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)   
[자바스크립트 async와 await](https://joshua1988.github.io/web-development/javascript/js-async-await/)
##### Redux-Middleware란 무엇인가 ?    
- 액션이 디스패치(dispatch) 되어서 리듀서에서 이를 처리하기전에 사전에 지정된 작업들을 설정한다.   
- 미들웨어는 액션과 리듀서 사이의 중간자라고 이해하시면 된다.   
- 리듀서가 액션을 처리하기전에, 미받은 액션에 기반하여 액션을 아예 취소시켜버리거나, 다른 종류의 액션들을 추가적으로 디스패치 할 수도 있다.  

##### Thunk란 무엇인가?
- Thunk란, 특정 작업을 나중에 하도록 미루기 위해서 함수형태로 감싼것을 칭한다.
- 예를 들면, 1 + 1 을 지금 당장 하고싶다면 이런 방식으로 진행한다.
```
const x = 1 + 2;
```
- 이 코드가 실행되면 1 + 2 의 연산이 바로 진행된다.
- 하지만 다음과 같이 함수 형태로 감싸면,
```
const foo = () => 1 + 2;
```
- 1 + 2 의 연산이 코드가 실행 될 때 바로 이뤄지지 않고 나중에 foo() 가 호출 되어야만 이뤄진다.

##### Redux-Thunk 는 정확히 뭘 하는 미들웨어일까?
- 가장 간단히 설명하자면, 이 미들웨어는 객체 대신 함수를 생성하는 액션 생성함수를 작성 할 수 있게 한다.
- 리덕스에서는 기본적으로는 액션 “객체”를 디스패치한다. 
- 일반 액션 생성자는, 다음과 같이 파라미터를 가지고 액션 객체를 생성하는 작업만 한다.
```
const actionCreator = (payload) => ({action: 'ACTION', payload});
```
- 만약에 특정 액션이 몇초뒤에 실행되게 하거나, 현재 상태에 따라 아예 액션이 무시되게 하려면, 일반 액션 생성자로는 할 수가 없다.
- 하지만, redux-thunk 는 이를 가능케한다.

- Redux-Thunk 는 일반 액션 생성자에 날개를 달아준다.
- 보통의 액션생성자는 그냥 하나의 액션객체를 생성 할 뿐이다.
- Redux-Thunk 를 통해 만든 액션 생성자는 그 내부에서 여러가지 작업을 할 수 있다.
- 이 곳에서 네트워크 요청을 해도 무방하다.
- 또한, 이 안에서 액션을 여러번 디스패치 할 수도 있다.

##### 어떻게 Redux - Thunk를 사용하는가 ?
1. Redux Thunk 설치
```
$ yarn add redux-thunk
```
2. 스토어를 생성할 때, 미들웨어를 적용
```
const store = createStore(modules, applyMiddleware(logger, ReduxThunk));
```
3. Thunk 생성함수 작성
```
export const getPost = (postId) => dispatch => {
    // 먼저, 요청이 시작했다는것을 알립니다
    dispatch({type: GET_POST_PENDING});

    // 요청을 시작합니다
    // 여기서 만든 promise 를 return 해줘야, 나중에 컴포넌트에서 호출 할 때 getPost().then(...) 을 할 수 있습니다
    return getPostAPI(postId).then(
        (response) => {
            // 요청이 성공했을경우, 서버 응답내용을 payload 로 설정하여 GET_POST_SUCCESS 액션을 디스패치합니다.
            dispatch({
                type: GET_POST_SUCCESS,
                payload: response
            })
        }
    ).catch(error => {
        // 에러가 발생했을 경우, 에로 내용을 payload 로 설정하여 GET_POST_FAILURE 액션을 디스패치합니다.
        dispatch({
            type: GET_POST_FAILURE,
            payload: error
        });
    })

}
```

##### Redux- Thunk를 이용해 포켓몬 도감을 만들어보자.

<img width="820" alt="스크린샷 2020-03-28 오후 7 08 14" src="https://user-images.githubusercontent.com/52201658/77820753-d8039c80-7127-11ea-8dbb-ffd4b092be3e.png">
<img width="799" alt="스크린샷 2020-03-28 오후 7 12 10" src="https://user-images.githubusercontent.com/52201658/77820786-244edc80-7128-11ea-996e-ace44490de47.png">

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



