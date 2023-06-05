import { useMyContext } from "../context/CountProvider";


export function CountButton() {
  const { incrementCount } = useMyContext();

  return <button onClick={incrementCount}>カウントアップ</button>;
}