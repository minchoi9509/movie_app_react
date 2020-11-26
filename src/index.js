import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* 
    jsx: javascript + html 조합, react 특화 개념
    리액트 어플리케이션은 하나의 컴포넌트만 랜더링 해야함
    -> vue에서 index.html에 main.js에서 app 컴포넌트 하나 넣는 것과 비슷한듯 
*/
ReactDOM.render(<App />, document.getElementById('root'));