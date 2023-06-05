import { CountButton } from '../compornets/CountButton';
import { CountDisplay } from '../compornets/CountDisplay';
import { TimeDisplay } from '../compornets/TimeDisplay';
import { CountProvider } from '../context/CountProvider';
export default function App() {
  return (
    <CountProvider>
      <CountButton />
      <CountDisplay />
      <TimeDisplay />
    </CountProvider>
  );
}