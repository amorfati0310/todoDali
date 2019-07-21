## Design 

0. Scaffolding

```typescript

src
- Design.md - doc
- index.html  - template
- main.js - main application 
- src 
-- api 
--- index.js
-- components 
--- TodoForm.js 
--- TodoApp.js
--- TodoList.js
- utils 
-- dom.js
``` 

1. API Refactor

1.1 API Refactor  

각각의 crud 함수들을 빼냄 
함수중에서 중복들이 있을 수 있는 요소들 
common
- fetch로 
* baseUrl + url 
* option 
인자를 받아서 실행하는 부분이 대체로 같다.

- fetch 
-- option -> method ,headers ,body ...


1.2 고민한 부분 
1.2.1 커먼으로 빠질 떄  

baseUrl/${username}은 비슷하나 
${baseUrl}/${username}/${id}/toggle 이런 부분이 있어서 어떻게 헤야 할지 

1.2.2  Error Handling 

 
export default {
  fetchData,
  toggleTodoComplete,
  deleteTodo,
  addTodo
}


2. UX Processing 요청 처리 중에 어떤 인터렉션을 줄 수 있는지 스터디 후 적용하기  

3. TodoList에 다양한 상태값 추가해보기 

4. Tab 컴포넌트 만들어서 TodoList 

user여러 -> Todo를 볼 수 있는 컴포넌트 만들기 

5. More Component
- Collapse Component TODOLIST 접었다 폈다 할 수 있게 하기
- Completed에 따라서 Filter하기 
- Draggable -> TodoList 끌어서 움직일 수 있게 하기 
- 날짜 캘린더 추가 하기 

6. Markup 도 점점 개선해보기 
너무 안 예쁘다 
붙일 수 있다면 엄청 많구나...
