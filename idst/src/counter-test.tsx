import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from './store/store';
import { increment, decrement } from './features/counter/counterSlice'; // this thing exists only for counter

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="space-x-2 p-4">
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
