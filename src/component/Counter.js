import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const pointer = useSelector((state) => state.pointer);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h1>Pointer: {pointer}</h1>
    </div>
  );
};

export default Counter;
