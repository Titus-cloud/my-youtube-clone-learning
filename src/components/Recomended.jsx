import React, { useEffect, useState } from "react";
import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import thumbnail4 from "../assets/thumbnail4.png";
import thumbnail5 from "../assets/thumbnail5.png";
import thumbnail6 from "../assets/thumbnail6.png";
import thumbnail7 from "../assets/thumbnail7.png";
import thumbnail8 from "../assets/thumbnail8.png";
import { API_KEY } from "../data";
import { useStateContext } from "../../context";
import { Link } from "react-router-dom";

const Recomended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const {valueConverter} = useStateContext()

  const fetchData = async () => {
    const relatedVideo = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=70&regionCode=KE&videoCategoryId=${categoryId}&key=${API_KEY}`;

    await fetch(relatedVideo)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    // recommended
    <div className="w-[30%] pt-4">
      {/* side video */}
      {apiData.map((Video, index) => {
        return (
          <Link to={`/video/${Video.snippet.categoryId}/${Video.id}`} key={index} className="flex gap-4 mb-2">
            <img
              src={Video?.snippet?.thumbnails?.medium?.url}
              alt=""
              className="basis-[49%] w-[50%] rounded-lg "
            />
            {/* vid info */}
            <div className="basis-[49%]">
              <h4 className="text-sm mb-1 ">{Video?.snippet?.title} </h4>
              <p>{Video?.snippet?.channelTitle}</p>
              <p>{valueConverter(Video?.statistics?.viewCount)} views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recomended;
