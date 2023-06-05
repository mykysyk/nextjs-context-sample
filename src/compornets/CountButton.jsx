import { useCount } from "../context/CounterProvider";


export function CountButton() {
  const { incrementCount } = useCount();

  return <button onClick={incrementCount}>カウントアップ</button>;
}