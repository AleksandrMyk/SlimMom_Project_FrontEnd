import React, { createContext, useState } from "react";

export const DateContext = createContext();

// This context provider is passed to any component requiring the context
export const DateProvider = ({ children }) => {
  const [date, setDate] = useState(new Date());
  const [consumed, setconsumed] = useState(0);
  const [dailyNorm, setdailyNorm] = useState(0);
  const [prohibited, setprohibited] = useState([]);
  return (
    <DateContext.Provider
      value={{
        date,
        setDate,
        consumed,
        setconsumed,
        dailyNorm,
        setdailyNorm,
        prohibited,
        setprohibited,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};
