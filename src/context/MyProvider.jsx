import { createContext, useState, useContext } from 'react';

const CountContext = createContext();

export const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(null);

  const incrementCount = () => {
    setCount(count + 1);
    setTime(new Date().toLocaleTimeString());
  };

  const contextValue = {
    count,
    time,
    incrementCount
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
