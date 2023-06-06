import { Links } from '../compornets/Link';
import { useTimer } from '../hooks/useTimer';

// 1秒後にアラートをだすだけ
const Timer = () => {

  const { startTimer } = useTimer();

  // 任意の関数を定義します
  const handleTimer = () => {
    console.log('指定した秒数が経過しました。');
    alert(duration)
    // ここで何でも実行することができます
  };

  // 任意の秒数を定義します
  const duration = 1; // 秒

  return (
    <div>
      <Links />
      <h1>TIMER</h1>
      <button onClick={() => startTimer(handleTimer, duration)}>遅延スタート({duration})</button>
    </div>
  );
}

export default Timer;