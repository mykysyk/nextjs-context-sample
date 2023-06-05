import { useCount } from "../context/CounterProvider";

export function TimeDisplay() {
  const { time } = useCount();

  return <div>最後に押された時間: {time}</div>;
}
