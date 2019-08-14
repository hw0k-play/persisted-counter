import React from 'react';

const Counter = (props) => {
  const { number, increment, decrement } = props;

  const handleIncrease = () => {
    increment();
  };

  const handleDecrease = () => {
    decrement();
  };

  return (
    <>
      <div>
        { number }
      </div>
      <div>
        <button onClick={handleIncrease}>+</button>
      </div>
      <div>
        <button onClick={handleDecrease}>-</button>
      </div>
    </>
  );
};

export default Counter;
