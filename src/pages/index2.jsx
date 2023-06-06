import Link from 'next/link';
import { CountButton } from '../compornets/CountButton';
import { Links } from '../compornets/Link';
import { CountDisplay } from '../compornets/CountDisplay';


export default function App() {
  return (
    <>
      <CountButton />
      <CountDisplay />
      <Links />
    </>
  );
}