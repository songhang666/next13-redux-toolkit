'use client';

import styles from './page.module.css'

import type { RootState } from './GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, decrementByAmount,multiplyByAmount } from './GlobalRedux/Features/counter/counterSlice';

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main>
      <div className={styles.count}>{count}</div>
      <div className={styles.wrapper}>
        <button
          className={styles.button}
          onClick={() => dispatch(increment())}
        >运气增加1</button>
        <button
          className={styles.button}
          onClick={() => dispatch(decrement())}
        >运气减1</button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(4))}
        >运气加4</button>
        <button
          className={styles.button}
          onClick={() => dispatch(decrementByAmount(4))}
        >运气减4</button>
        <button
          className={styles.button}
          onClick={() => dispatch(multiplyByAmount(2))}
        >运气翻倍</button>
      </div>
    </main>
  )
}
