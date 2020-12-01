import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';

/* 
    return (<HashRouter>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
    );
  뷰랑 다르게 이런 방식이면 /about으로 들어 갔을 때 컴포넌트가 겹쳐서 보임. 
  왜냐면 path="/" 루트랑 "/about"가 모두 매치된다고 판단하기 때문. 

  --> exact={true} 옵션을 통해서 '/' 일 때만 랜더링 가능. 
*/
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;