import { CountButton } from '../compornets/CountButton';
import { CountDisplay } from '../compornets/CountDisplay';
import { Links } from '../compornets/Link';
import { TimeDisplay } from '../compornets/TimeDisplay';
import { WsClient } from '../compornets/WsClient';

export default function App() {
  return (
    <>
      <CountButton />
      <CountDisplay />
      <TimeDisplay />
      <Links />
      <WsClient />
    </>
  );
}