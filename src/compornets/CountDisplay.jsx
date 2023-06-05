import { useMyContext } from "../context/MyProvider";


export function CountDisplay() {
  const { count } = useMyContext();

  return <div>カウント: {count}</div>;
}
