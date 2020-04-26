# 어드민 페이지 설계

### Project Directory Structure   
- components: 컴포넌트 파일들이 위치하는 폴더.   
- containers: 컨테이너 파일들이 위치하는 폴더. 주로 state를 props로 매핑하는 코드들이 위치.   
- pages: Routing을 위한 페이지 파일들이 위치하는 폴더.   
- modules: redux 작업을 위한 폴더.    
- lib : api 호출을 위한 코드를 모아두는 폴더.   

### Detail Directory Structure  
![admin_directory_tree](https://user-images.githubusercontent.com/52201658/80302147-400ad880-87e3-11ea-861b-8a01a7a02c6d.png)

### Path Organization   

#### /    
오버뷰 페이지    
#### /users   
유저 관리 페이지    
#### /errands   
심부름 관리 페이지    
#### /login   
관리자 로그인 페이지   

### comments   
관리자 페이지기 때문에 반응형 디자인이 필요없어 PC 모드로만 마크업한다.   
모바일 기기로 관리자 페이지에 접근할 시, 레이아웃이 깨질 수 있다.   


