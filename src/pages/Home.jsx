import React from "react";
import SideBar from "../components/SideBar";
import { useStateContext } from "../../context";

const Home = () => {
  const { sidebar } = useStateContext();
  return (
    <>
      <SideBar sidebar={sidebar} />
    </>
  );
};

export default Home;
