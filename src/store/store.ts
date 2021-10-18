import { useState } from "react";
import { createModel } from "hox";

function useCounter() {
  const [count, setCount] = useState(0);
  const decrement = (num?:number) => setCount(typeof num !== 'number' ? count - 1 : count - num);
  const increment = (num?:number) => setCount(typeof num !== 'number' ? count + 1 : count + num);
  return {
    count,
    decrement,
    increment
  };
}

export default createModel(useCounter);