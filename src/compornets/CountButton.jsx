import { useMyContext } from "../context/MyProvider";


export function CountButton() {
  const { incrementCount } = useMyContext();

  return <button onClick={incrementCount}>カウントアップ</button>;
}