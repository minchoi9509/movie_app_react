import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css";

/* 
    return <div>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </div>

    --> 이런 식으로 하면 HTML로 인해서 전체 새로고침이 되면서 /about을 클릭했을 때 로딩이 제대로 되지 않음. 리액트가 죽고, 새로운 새 페이지가 새로고침 되는 것과 같은 효과.
    --> Link를 이용하기 위해서는 라우터 안에 넣어서 (App.js) 사용.

*/
function Navigation() {
    return <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
}

export default Navigation;