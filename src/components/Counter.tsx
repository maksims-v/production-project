import { useState } from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className={classes.btn}>{count}</div>
      <button onClick={() => setCount(count + 1)}>Жми</button>
    </div>
  );
};

export default Counter;
