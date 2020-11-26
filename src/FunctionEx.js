import React from 'react';
import Proptypes from 'prop-types';

/* 함수형 컴포넌트 => 최근에는 이런 형식으로 사용 */

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'test-kimchi',
    rating: 1,
  },
  {
    id: 2,
    name: 'hotdog',
    image: 'test-hotdog',
    rating: 10,
  }
]

/* 원래 Food(props)로 받아서 I like {props.name} 식으로 사용하는 것을 구조 분해 할당 식으로 나눠서 사용 가능함.  */
function Food({ name, picture, rating }) {
  return (
    <div>
      <h3>I like {name}</h3>
      <h4>Here is {picture} with {rating}</h4>    
      <hr/>
    </div>
  )
}

/* vue에서 props에 조건 걸 수 있는 거랑 비슷하게 사용 할 수 있는 것 같음. */
Food.propTypes = {
  name: Proptypes.string.isRequired,
  picture: Proptypes.string.isRequired,
  rating: Proptypes.number.isRequired
}

function FunctionEx() {
  /* 
    {} 여기 안에 들어가게 되면 자바스크립트 형식을 띄게 됨. 
    map 함수를 이용해서 사용 할 수 있음. 리액트가 결국 자바스크립트라는 것이 이런 곳에서 나오는 것.
    신기하다...
   */
  return (
    <div>
      <h1>Function Component Example</h1>
      {foodILike.map(dish => (
         <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default FunctionEx;