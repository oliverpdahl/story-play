import React, { useState, createContext, useContext } from "react";
export const CounterContext = createContext();
export const CounterProvider = (props) => {
  const [count, setCount, characterImage] = useState(0);
  return (
    <CounterContext.Provider
      value={[count, setCount, characterImage]}
      {...props}
    ></CounterContext.Provider>
  );
};
export const useCounterStore = () => useContext(CounterContext);
