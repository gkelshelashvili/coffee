import { createContext, useState } from 'react';

const CappuccinoContext = createContext();

const CappuccinoProvider = ({ children, value }) => {
  const [coffee, setCoffee] = useState(value.coffee);

  return (
    <CappuccinoContext.Provider value={{ coffee, setCoffee }}>
      {children}
    </CappuccinoContext.Provider>
  );
};

export { CappuccinoProvider, CappuccinoContext };