import React, { useState, useContext, createContext } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [expanded, setExpanded] = useState(true);
  const [sidebar, setSidebar] = useState(true);
  const { videoId, categoryId } = useParams();
  const [category, setCategory] = useState(0);

  // const navigate = useNavigate();
  const valueConverter = (value) => {
    if (value >= 1000000) {
      return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
      return Math.floor(value / 1000) + "K";
    } else {
      return value;
    }
  };
  return (
    <div>
      <StateContext.Provider
        value={{
          sidebar,
          setSidebar,
          // navigate,
          expanded,
          setExpanded,
          category,
          setCategory,
          valueConverter,
          videoId,
          categoryId,
        }}
      >
        {children}
      </StateContext.Provider>
    </div>
  );
};

export const useStateContext = () => useContext(StateContext);
