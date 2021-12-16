import React, { createContext, useReducer } from "react";

//Initial State

const InitialState = [
  { id: 1, label: "Flower", amount: -20 },
  { id: 2, label: "Salary", amount: 300 },
  { id: 3, label: "Book", amount: -10 },
  { id: 4, label: "Camera", amount: 150 },
];

//Create Context

export const GlobalContext = createContext(InitialState);

//provider Component

export const GlobaleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(InitialState);
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
