import React, { useEffect, useState } from "react";
import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import thumbnail4 from "../assets/thumbnail4.png";
import thumbnail5 from "../assets/thumbnail5.png";
import thumbnail6 from "../assets/thumbnail6.png";
import thumbnail7 from "../assets/thumbnail7.png";
import thumbnail8 from "../assets/thumbnail8.png";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context";
import { API_KEY } from "../data";
import moment from "moment";
const Feed = () => {
  const { category, setCategory, valueConverter } = useStateContext();
  const [data, setData] = useState([]);

  // fetch data
  const fetchData = async () => {
    const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=200&regionCode=KE&videoCategoryId=${category}&key=${API_KEY}`;

    await fetch(videoListUrl)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4 px-4">
      {data.map((item, index) => (
        <Link
          key={index}
          to={`video/${item.snippet.categoryId}/${item.id}`}
          className="block"
        >
          <img
            src={item.snippet.thumbnails.medium.url}
            alt=""
            className="w-full rounded-lg"
          />
          <h2 className="font-bold text-base sm:text-lg pt-2">
            {item.snippet.title}
          </h2>
          <h3 className="text-gray-500 text-sm sm:text-base">
            {item.snippet.channelTitle}
          </h3>
          <p className="text-gray-500 text-sm sm:text-base">
            {valueConverter(item.statistics.likeCount)} •{" "}
            {moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
