import { createContext, useState, useContext } from 'react';
import useWs from '../hooks/useWs';

const CountContext = createContext();

export const MyProvider = ({ children }) => {
  const [ count, setCount ] = useState(0);
  const [ time, setTime ] = useState(null);
  const { wsMessages, sendWsMessage } = useWs('ws://127.0.0.1:5005/');

  const incrementCount = () => {
    setCount(count + 1);
    setTime(new Date().toLocaleTimeString());
    sendWsMessage({
      data: 'test',
      key: Date.now()
    });
  };

  const contextValue = {
    count,
    time,
    incrementCount,
    wsMessages,
    sendWsMessage
  };

  return (
    <CountContext.Provider value={contextValue}>
      {children}
    </CountContext.Provider>
  );
}

export const useMyContext = () => {
  return useContext(CountContext);
}
