import React from "react";
import SideBar from "../components/SideBar";
import { useStateContext } from "../../context";
import Feed from "../components/Feed";
import Navbar from "../components/Navbar";

const Home = () => {
  const { sidebar, setSidebar,expanded } = useStateContext();
  return (
    <>
    <SideBar />
      <SideBar sidebar={sidebar} />
      <div className={`${expanded ? 'bg-[#f9f9f9] pl-[15%] pr-[2%] pt-1 pb-5' : 'pl-[7%] pr-[2%] ' }`}>
        <Feed />
      </div>
    </>
  );
};

export default Home;
