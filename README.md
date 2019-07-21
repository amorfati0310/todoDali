# Mission 4

## TodoApp에 API 연동하기

이번에는 1주차, 3주차에 했던 TodoApp에 제가 간단하게 만든 API를 연동하여 좀 더 생명력 있는 웹앱을 만들어보는 시간을 가져보겠습니다.

## API 사용법

2주차에 했던 `fetch`를 통해 짤봇 데이터를 불러왔던 걸 기억하시나요? 이번에도 `fetch`를 이용해 Todo 목록 data를 불러오고, 특정 Todo를 삭제하고, 완료처리를 하는 것에 도전해봅니다.

### 데이터 형태

```javascript
{
  "_id": 할 일의 고유값. 숫자와 문자가 섞여있는 문자로 되어있음,
  "content": 할 일 text,
  "isCompleted": 할 일의 완료여부
}
```

### 할 일 목록 불러오기

- API Url: http://todo-api.roto.codes/<username>

> 모든 API에는 `username`이 들어가게 되어있습니다. 본인의 `username`을 적당히 넣으시면 됩니다.
> 사용예시

```javascript
fetch('http://todo-api.roto.codes/roto').then()...
```

### 할 일 추가하기

- API Url: http://todo-api.roto/codes/<username>

```javascript
fetch('http://todo-api.roto.codes/roto', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    content: '자바스크립트 공부하기'
  })
}).then(function(){
  ....
})
```

### 할 일 삭제하기

- API url: http://todo-api.roto.codes/<username>/<todo_id>
- 서버에서 불러온 todo 데이터는 `_id` 라는 이름으로 해당 todo의 id가 있습니다.
  - 이것을 url의 `<todo_id>` 부분에 넣으면 됩니다.

```javascript
fetch('http://todo-api.roto.codes/roto/5d11cf671e050d3f7c583166', {
  method: 'DELETE'
}).then(function(){
  ....
})
```

### 할 일 완료여부 토글하기

- API url: http://todo-api.roto.codes/<username>/<todo_id>/toggle
- `todo_id`에 해당하는 todo가 완료상태인 경우 미완료처리, 미완료 상태인 경우 완료처리를 합니다.

```javascript
fetch('http://todo-api.roto.codes/roto/5d11cf671e050d3f7c583166', {
  method: 'PUT'
}).then(function(){
```

## 기본 요구사항

- 전체적으로 중복된 코드들이 있습니다. 중복된 코드들을 다듬을 수 있는만큼 다듬어주세요.
- `fetch`를 쓰고 있는 코드들을 하나로 모아 `api.js` 라는 이름으로 만들고, 실제 쓰는 쪽에선 `fetch` 대신에 `api.js`에서 제공해주는 코드를 사용하도록 합니다.
- `fetch`로 서버와 통신 중인 경우, 서버와 통신 중임을 알리는 UI 요소를 추가합니다.
  - `Loading..` 같은 텍스트를 어디선가에서 보여주거나
  - 로딩 이미지를 구해서 보여주는 것도 좋을 것 같네요.

## Bonus

- `http://todo-api.roto.codes/users`를 `fetch` 해오면 `username` 목록을 얻을 수 있습니다.
  - `Users` 컴포넌트를 만들어서 사용자 목록을 보여주고
  - 특정 사용자를 클릭하여 그 사용자의 `todos`를 불러와서 화면에 뿌려지게 합니다.
  - 현재 뿌려진 `todos`가 누구의 `todos`인지 표시하는 부분이 들어가는 것도 좋겠죠?
- `fetch`를 사용하다 에러가 생겼을 때의 에러처리를 추가합니다.

그외 원하는 API 기능이 있다면 메세지 주세요! API를 추가해드리겠습니다.

마지막 미션입니다. 마지막까지 불태워봅시다🔥
