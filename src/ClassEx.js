import React from 'react';
import Proptypes from 'prop-types';

/* 
  # 클래스형 컴포넌트
    # React.Component를 상속 받아서 사용함. 그 안에 render()라는 메소드 존재. 

  --
  Life Cycle
  # Mounting
    # 먼저 호출되는 function <-> vue: created(?)
    # constructor() -- 자바스크립트에서 실행되는 메서드
    # render()
    # componentDidMount()
  # Updating
    # render()
    # componentDidUpdate()
  # Unmounting
    페이지를 바꿀 때, state를 사용해서 컴포넌트를 교체 할 때, 컴포넌트가 바뀔 때 호출.
    # componentWillUnmount()
  --
*/

class ClassEx extends React.Component {
  /* 
    리액트가 자동으로 render 메소드를 실행함. 자바 main()이랑 같은 듯.
    클래스 컴포넌트를 이야기 하는 이유 ? 'state' 때문 ** state는 object임. 
    state vuex에서 나오는 개념이랑 비슷한듯. 
   */
  state = {
    count: 0
  };
  
  /* 
    버튼을 누르면 실행되는 코드. 이건 리액트가 아니라 자바스크립트임. 

    # Do not mutate state directly. Use setState()
      add 메소드에서 this.state.count = -1; 이런식으로 state를 직접적으로 변경하려 했을 때 나오는 오류.
      vuex에서 getters로 계산하지 않는 것과 같음. 좀 더 엄격한듯?  
      리액트는 render 함수를 이런 경우 실행하지 않음 -> 매번 state의 상태를 변경 할 때는 리액트가 render() 함수를 한 번 더 호출 하는 것과 같음. 
        this.state.count = -1 ---> setState()를 통해서 state를 refresh하고 render함수를 다시 호출할 것임.. state는 object임. 
      --> 이런 점+DOM을 통해서 새로고침을 하지 않고 내용 변경 가능

    하지만 이런 방식은 좋지는 않음. state에 의존하지 않기 위해서 --> 나중에 나은 방법 나옴. 
  */
  add = () => {
    // this.state.count = -1;
    // this.setState({ count : this.state.count + 1 });

    // current를 통해서 state에 접근 하는 것이 좋음. current = 현재 값. 
    this.setState(current => ({ count: current.count + 1 }));
  };

  minus = () => {
    // console.log("minus");
    this.setState(current => ({ count: current.count - 1}));
  }

  /* 
    Q. 차이점?
    this.add <-> this.add() 
      # this.add  : 클릭 했을 때 
      # this.add() : 즉시 ====> 이렇게 하면 클릭했을 때 메소드 호출이 되지 않고 그냥 랜더링 되면서 호출됨
  */
  render() {
    return (
      <div>
        <h1>Function Component Example</h1>
        <h2>The number is {this.state.count}</h2>
        <button onClick={this.add}>Add</button> 
        <button onClick={this.minus}>Minus</button>
      </div>      
    )
  }
}

export default ClassEx;