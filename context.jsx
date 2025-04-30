import React, { useState, useContext, createContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [expanded, setExpanded] = useState(true);
  const [sidebar, setSidebar] = useState(true);
  // const navigate = useNavigate();

  return (
    <div>
      <StateContext.Provider
        value={{
          sidebar,
          setSidebar,
          // navigate,
          expanded,
          setExpanded,
        }}
      >
        {children}
      </StateContext.Provider>
    </div>
  );
};

export const useStateContext = () => useContext(StateContext);
