import { useMyContext } from "../context/MyProvider";

export function TimeDisplay() {
  const { time, count } = useMyContext();

  return (
  <div>最後に押された時間: {time} [{count}]</div>

  )
}
