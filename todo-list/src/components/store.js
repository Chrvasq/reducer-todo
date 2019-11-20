import React, { createContext, useReducer } from "react";
import { reducer, initialState } from "../reducers/reducer";

export const StoreContext = createContext();

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
