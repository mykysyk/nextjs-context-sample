import React, { createContext, useState, useContext } from 'react';

const CountContext = createContext();

export function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(null);

  const incrementCount = () => {
    setCount(count + 1);
    setTime(new Date().toLocaleTimeString());
  };

  return (
    <CountContext.Provider value={{ count, time, incrementCount }}>
      {children}
    </CountContext.Provider>
  );
}

export function useCount() {
  return useContext(CountContext);
}
