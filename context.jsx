import React, { useState, useContext, createContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const StateContext = createContext();


export const StateContextProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(true);
  // const navigate = useNavigate();

  return (
    <div>
      <StateContext.Provider
        value={{
          sidebar,
          setSidebar,
          // navigate,
        }}
      >
        {children}
      </StateContext.Provider>
    </div>
  );
};

export const useStateContext = () => useContext(StateContext);
