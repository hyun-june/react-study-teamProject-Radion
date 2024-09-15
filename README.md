<h1>코딩알려주는누나 리액트 스터디 2기 팀프로젝트 6조</h1>

# radion
radion은 radio와 on을 결합된 단어로, 라디오처럼 언제 어디서나 다양한 음악을 들을 수 있도록 도와준다라는 의미
<br/>

## 링크
- [배포](https://radion-react-project.vercel.app/)
- [Figma](https://www.figma.com/design/1XkwexEXjYZP0XyOWO04Dm/리액트-스터디-2기-6조?node-id=0-1&node-type=CANVAS&t=Rqzwfp7MrQ9fbRIU-0)
<br/><br/>

## 프로젝트 소개

### 주제
스포티파이와같은 음악 스트리밍사이트를 만드는것
### 목적

### 쓰임새

### 기대


## 개발 기간
2024년 9월 08일 일요일 ~ 2024년 9월 15일 일요일 (총 8일)
<br/><br/>

## Team
|<img src="https://avatars.githubusercontent.com/u/104238365?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/108655272?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/107117538?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/154667059?v=4" width="150" height="150"/>|
|:-:|:-:|:-:|:-:|
|[@kangheemung](https://github.com/kangheemung)<br/>Product Owner|[@JeongChan2]()<br/>Scrum Master|[@Hyejung Na](https://github.com/HyejungNa)<br/>Developer|[@hyun-june](https://github.com/hyun-june)<br/>Developer|
<br/>

## 기능
<ul>
  <li>로그인 기능</li>
  <li>음악 검색</li>
  <li>추천 음악</li>
  <li>플레이리스트</li>
</ul>
<br/><br/>

## API
- spotify API
- youtube data api v3
<br/><br/>
## 스탠드업 미팅
- 21:30분
<br/><br/>
## 개발 일지
<details>
  <summary><b>2024년 9월 08일 일요일 (1일차)</b></summary>
    <details> 
      <summary><b>Done</b></summary>
        <div>
         <ul>
           <li>
             팀원 역할 뽑기
           </li>
           <li>
             Figma로 Product Backlog 만들기
           </li>
           <li>
             깃 폴더 구조 정하기
           </li>
           <ol>
             Main - 최종 배포 브랜치<br/>
             develop - 2차 테스트 브랜치<br/>
             dev-페이지명 (1차 각 페이지별 테스트, 각 페이지별 기능의 상위 브랜치)<br/>
             dev-페이지명 - 기능 - v1(버전)<br/>
           </ol>
            <li>
             코드 컨벤션 정하기
           </li>
           <ol>
             커밋 컨벤션<br/>
             네이밍 컨벤션
           </ol>
         </ul> 
        </div>
    </details>
    <details>
      <summary><b>To Do</b></summary>
        <div>
          <ul>
            <li>
              각자 사용할 api 찾아보기
            </li>
            <li>
              사용하고 싶은 기능 생각해보기
            </li>
          </ul>
        </div>
    </details>  
</details>
<details>
  <summary><b>2024년 9월 09일 월요일 (2일차)</b></summary>
    <details> 
      <summary><b>Done</b></summary>
        <div>
         <ul>
           <li>
             오후 10시 스탠드업 미팅 진행
           </li>
           <li>
             각자 구현할 부분 정하기
           </li>
         </ul> 
        </div>
    </details>
    <details>
      <summary><b>To Do</b></summary>
        <div>
          <ul>
            <li>
              spotify api 사용법 익히기
            </li>
            <li>
              혜정 - 로그인/회원가입/nav바
            </li>
            <li>
              정찬 - 상세페이지 
            </li>
            <li>
              희명 - 홈페이지 
            </li>
            <li>
              현준 - 플레이어 음악 재생 기능  
            </li>
            <li>
              회의 시간 21:30분 변경
            </li>
          </ul>
        </div>
    </details>  
</details><details>
  <summary><b>2024년 9월 10일 화요일 (3일차)</b></summary>
    <details> 
      <summary><b>Done</b></summary>
        <div>
         <ul>
           <li>
             api로 데이터 가져오기
           </li>
           <li>
            로고 정하기
           </li>
         </ul> 
        </div>
    </details>
    <details>
      <summary><b>To Do</b></summary>
        <div>
          <ul>
            <li>
              혜정
            </li>
            <ol>
              로고완성 <br/>
              로그인페이지 UI구현<br/>
              소셜 로그인 기능 구현<br/>
              navbar ui 구현<br/>
            </ol>
            <li>
              현준
            </li>
            <ol>
              뮤직 플레이어 가져오기
            </ol>
            <li>
              희명
            </li>
            <ol>
              api 데이터 구조 확인 <br/>
              데이터 활용해서 배너나 앨범 만들기<br/>
            </ol>
            <li>
              정찬
            </li>
            <ol>
              api 구조 생성 <br/>
              음악 detail api 호출 및 UI 작업 <br/>
            </ol>
          </ul>
        </div>
    </details>  
</details><details>
  <summary><b>2024년 9월 11일 수요일 (4일차)</b></summary>
    <details> 
      <summary><b>Done</b></summary>
        <div>
         <ul>
            <li>
              혜정
            </li>
            <ol>
              로고완성 <br/>
              로그인페이지 UI구현<br/>
              소셜 로그인 기능 구현<br/>
            </ol>
            <li>
              현준
            </li>
            <ol>
              youtube api, spotify api 데이터 가져오기
            </ol>
            <li>
              희명
            </li>
            <ol>
              api 데이터 구조 확인 <br/>
            </ol>
            <li>
              정찬
            </li>
            <ol>
              api 구조 생성 <br/>
              음악 detail api 호출 및 UI 작업 <br/>
            </ol>
          </ul>
         </ul> 
        </div>
    </details>
    <details>
      <summary><b>To Do</b></summary>
        <div>
          <ul>
            <li>
              혜정
            </li>
            <ol>
              navbar 디자인 수정<br/>
              로그인 했을 때 UI 수정<br/>
            </ol>
            <li>
              현준
            </li>
            <ol>
              youtube api, spotify api 활용해서 재생 시켜보기
            </ol>
            <li>
              희명
            </li>
            <ol>
              데이터 활용해서 배너, 앨범 만들기<br/>
            </ol>
            <li>
              정찬
            </li>
            <ol>
              detail page 수정
            </ol>
          </ul>
        </div>
    </details>  
</details><details>
  <summary><b>2024년 9월 12일 목요일 (5일차)</b></summary>
    <details> 
      <summary><b>Done</b></summary>
        <div>
         <ul>
           <li>
              혜정
            </li>
            <ol>
              navbar 디자인 수정<br/>
              로그인 했을 때 UI 수정<br/>
            </ol>
            <li>
              현준
            </li>
            <ol>
              youtube api, spotify api 활용해서 재생 시켜보기
            </ol>
            <li>
              희명
            </li>
            <ol>
              데이터 활용해서 배너, 앨범 만들기<br/>
            </ol>
            <li>
              정찬
            </li>
            <ol>
              detail page 수정
            </ol>
         </ul> 
        </div>
    </details>
    <details>
      <summary><b>To Do</b></summary>
        <div>
          <ul>
            <li>
              혜정
            </li>
            <ol>
              navbar 수정(링크 및 로그인 버튼)<br/>
            </ol>
            <li>
              현준
            </li>
            <ol>
               musicPlayer page css 수정<br/>
            </ol>
            <li>
              희명
            </li>
            <ol>
              homepage css 수정<br/>
            </ol>
            <li>
              정찬
            </li>
            <ol>
              detail page 수정<br/>
            </ol>
            <li>
              homepage 앨범 클릭시 detail page로 이동
            </li>
            <li>
              playlist의 내용 보여줄 page 만들기
            </li>
          </ul>
        </div>
    </details>  
</details><details>
  <summary><b>2024년 9월 13일 금요일 (6일차)</b></summary>
    <details> 
      <summary><b>Done</b></summary>
        <div>
         <ul>
           <li>
              혜정
            </li>
            <ol>
              navbar 수정(링크 및 로그인 버튼)<br/>
            </ol>
            <li>
              현준
            </li>
            <ol>
               musicPlayer page css 수정<br/>
               playlist의 내용 보여줄 page 만들기<br/>
            </ol>
            <li>
              희명
            </li>
            <ol>
              homepage css 수정<br/>
            </ol>
            <li>
              정찬
            </li>
            <ol>
              detail page 수정<br/>
            </ol>
         </ul> 
        </div>
    </details>
    <details>
      <summary><b>To Do</b></summary>
        <div>
          <ul>
            <li>
              homepage 앨범 클릭시 detail page로 이동
            </li>
            <li>
              page별 navigate 연결하기
            </li>
          </ul>
        </div>
    </details>  
</details><details>
  <summary><b>2024년 9월 14일 토요일 (7일차)</b></summary>
    <details> 
      <summary><b>Done</b></summary>
        <div>
         <ul>
           <li>
              혜정
            </li>
            <ol>
              navbar 수정(링크 및 로그인 버튼)<br/>
            </ol>
            <li>
              현준
            </li>
            <ol>
               musicPlayer page css 수정<br/>
               playlist의 내용 보여줄 page 만들기<br/>
            </ol>
            <li>
              희명
            </li>
            <ol>
              homepage css 수정<br/>
            </ol>
            <li>
              정찬
            </li>
            <ol>
              detail page 수정<br/>
            </ol>
           <li>
             homepage 앨범 클릭시 detail page로 이동<br/>
           </li>
         </ul> 
        </div>
    </details>
    <details>
      <summary><b>To Do</b></summary>
        <div>
          <ul>
            <li>
              혜정
            </li>
            <ol>
               private route 적용<br/>
            </ol>
            <li>
              현준
            </li>
            <ol>
               하드 코딩 된 list img, title 수정<br/>
            </ol>
            <li>
              희명
            </li>
            <ol>
              homepage 슬라이드 css 수정<br/>
              발표 준비<br/>
            </ol>
            <li>
              정찬
            </li>
            <ol>
              detail page 내용 추가<br/>
            </ol>
           <li>
             homepage 앨범 클릭시 detail page로 이동<br/>
           </li>
            <li>
              반응형 css 적용하기<br/>
            </li>
            <li>
              발표 스크립트 보내기<br/>
            </li>
            <li>
              메인페이지에 아티스트 추가<br/>
            </li>
          </ul>
        </div>
    </details>  
</details><details>
  <summary><b>2024년 9월 15일 일요일 (8일차)</b></summary>
    <details> 
      <summary><b>Done</b></summary>
        <div>
         <ul>
           <li>
             css
           </li>
           <li>
             발표
           </li>
         </ul> 
        </div>
    </details>
    <details>
      <summary><b>To Do</b></summary>
        <div>
          <ul>
            <li>
              팀프로젝트 리뷰
            </li>
          </ul>
        </div>
    </details>  
</details>
<br/>

### 프로젝트 후기
<h4>강희명</h4>
<h4>이정찬</h4>
- 아아
<h4>이현준</h4>
아아
<h4>나혜정</h4>
