import { useCount } from "../context/CounterProvider";


export function CountDisplay() {
  const { count } = useCount();

  return <div>カウント: {count}</div>;
}
