"use client"

import { useState } from "react";
import Counter from "../Counter";

const CounterParent = () => {
    const [count, setCount] = useState<number>(1);

  return (
    <Counter count={count} setCount={setCount}/>
  )
}

export default CounterParent