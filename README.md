## 앞부분 놓쳐서... 다시 공부하며 새로 만든 Next.js 교안 repository ( 24-11-19 ~ )


1. `npx shadcn@latest init` 해서 next.js 프로젝트 만들기

2. styles 폴더 만들어서 global.css옮긴 다음에 위에 명령어 한번더해야 shadcn ui가 다운로드되네요...

3. `npm i sass`

로컬환경에서 http://localhost:3000 접속하면 된다.

### 작업 과정

24-11-19

1. 메인 페이지 aside와 main 구분하기

2. 각 구역에 구성요소 넣기

3. Add New Page 버튼 기능 구현 (페이지 라우팅 처리)

4. 새 페이지 화면 헤더와 바디 ui 구현, 바디는 보드들로 구성됨

5. 보드를 피쳐(Features)로 분리
- 왠지 위젯이 더 맞는 것 같기도... 아님말고... 어렵다!
-- https://emewjin.github.io/feature-sliced-design/

---


* 보드 추가를 위한 Add New Board 버튼 기능 구현

* 보드에 Add Components 등 기능 구현

* Add Components Dialog

* DB 연결

등

===

1. React Markdown Editor 라이브러리 설치: `npm i @uiw/react-markdown-editor`
2. 서버리스 데이터베이스 Supabase 설치: `npm install @supabase/supabase-js`
3. 고유한 문자열 식별자 생성기 설치(nano-id): `npm install nanoid`