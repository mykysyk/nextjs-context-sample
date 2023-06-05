import { CountButton } from '../compornets/CountButton';
import { CountDisplay } from '../compornets/CountDisplay';
import { TimeDisplay } from '../compornets/TimeDisplay';
import { MyProvider } from '../context/MyProvider';
export default function App() {
  return (
    <>
      <CountButton />
      <CountDisplay />
      <TimeDisplay />
    </>
  );
}