import React from "react";
import home from "../assets/home.png";
import automobiles from "../assets/automobiles.png";
import game from "../assets/game_icon.png";
import sports from "../assets/sports.png";
import entertainment from "../assets/entertainment.png";
import tech from "../assets/tech.png";
import music from "../assets/music.png";
import blogs from "../assets/blogs.png";
import news from "../assets/news.png";
import jack from "../assets/jack.png";
import simon from "../assets/simon.png";
import tom from "../assets/tom.png";
import megan from "../assets/megan.png";
import cameron from "../assets/cameron.png";
import {useStateContext} from '../../context'

const SideBar = () => {
  const {sidebar, setSidebar} = useStateContext()
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`bg-white w-[15%] h-[100vh] fixed top-0 pl-[2%] pt-[80px] shadow-md sidebar ${sidebar ? '' : 'small'}`}>

      {/* shortcut links */}
      <div className="">
        {/* side links */}
        <div className="flex items-center mt-5 w-fit text-wrap cursor-pointer">
          <img src={home} alt="" className="w-5 mr-5 "/> <p>Home</p>
        </div>

        <div className="flex items-center mt-5 w-fit text-wrap cursor-pointer">
          <img src={game} alt="" className="w-5 mr-5 "/> <p>Gaming</p>
        </div>

        <div className="flex items-center mt-5 w-fit text-wrap cursor-pointer">
          <img src={automobiles} alt="" className="w-5 mr-5 "/> <p>Automobiles</p>
        </div>

        <div className="flex items-center mt-5 w-fit text-wrap cursor-pointer">
          <img src={sports} alt="" className="w-5 mr-5 "/> <p>Sports</p>
        </div>

        <div className="flex items-center mt-5 w-fit text-wrap cursor-pointer">
          <img src={entertainment} alt="" className="w-5 mr-5 "/> <p>Entertainment</p>
        </div>

        <div className="flex items-center mt-5 w-fit text-wrap cursor-pointer">
          <img src={tech} alt="" className="w-5 mr-5 "/> <p>Teck</p>
        </div>

        <div className="flex items-center mt-5 w-fit text-wrap cursor-pointer">
          <img src={music} alt="" className="w-5 mr-5 "/> <p>Music</p>
        </div>

        <div className="flex items-center mt-5 w-fit text-wrap cursor-pointer">
          <img src={blogs} alt="" className="w-5 mr-5 "/> <p>Blogs</p>
        </div>

        <div className="flex items-center mt-5 w-fit text-wrap cursor-pointer">
          <img src={news} alt="" className="w-5 mr-5 "/> <p>News</p>
        </div>
        <hr className="border-0 h-[1px] bg-[#ccc] w-[85%]"/>

        {/* subscribed list */}
        <div className="">
          <h3 className="text-[13px] my-[20px] mx-0 ">Subscribed</h3>
          {/* sude links */}
          <div className="flex py-3">
            <img src={jack} alt="" className="w-6 rounded-full mr-5"/> <p>PewDiepie</p>
          </div>

          <div className="flex py-3">
            <img src={simon} alt="" className="w-6 rounded-full mr-5"/> <p>MrBeast</p>
          </div>

          <div className="flex py-3">
            <img src={tom} alt="" className="w-6 rounded-full mr-5"/> <p>JBieber</p>
          </div>

          <div className="flex py-3">
            <img src={megan} alt="" className="w-6 rounded-full mr-5"/> <p>FiveCraft</p>
          </div>

          <div className="flex py-3">
            <img src={cameron} alt="" className="w-6 rounded-full mr-5"/> <p>NasDaq</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
