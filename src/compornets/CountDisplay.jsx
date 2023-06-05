import { useMyContext } from "../context/CountProvider";


export function CountDisplay() {
  const { count } = useMyContext();

  return <div>カウント: {count}</div>;
}
