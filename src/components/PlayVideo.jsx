import React, { useEffect, useState } from "react";
import video1 from "../assets/video.mp4";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import jack from "../assets/jack.png";
import user from "../assets/user_profile.jpg";
import { useStateContext } from "../../context";
import { API_KEY } from "../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
  const [apiData, setApiData] = useState(null);
  const { valueConverter } = useStateContext();
  const [chanelData, setChanelData] = useState(null);
  const [commentsData, setCommentsData] = useState([]);
  const { videoId, categoryId } = useParams();

  const fetchVideoData = async () => {
    const videodetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

    await fetch(videodetailsUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchChanelData = async () => {
    const chanelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet?.channelId}&key=${API_KEY}
`;

    await fetch(chanelDataUrl)
      .then((res) => res.json())
      .then((data) => setChanelData(data.items[0]));

    // fetch commet data
    const commentsUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=${videoId}&key=${API_KEY}
`;

    await fetch(commentsUrl)
      .then((res) => res.json())
      .then((data) => setCommentsData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchChanelData();
  }, [apiData]);
  return (
    <div className="container mx-auto px-4 max-w-screen-xl pl-[13%] pr-4 pt-2">
      {/* Video Player */}
      <div className="w-full aspect-video mb-4">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full rounded-lg"
        ></iframe>
      </div>

      {/* Video Title */}
      <h3 className="text-xl font-semibold mb-1">
        {apiData?.snippet?.title || "Title Here"}
      </h3>

      {/* Video Info */}
      <div className="text-sm text-gray-500 mb-4">
        {valueConverter(apiData?.statistics?.viewCount)} Views •{" "}
        {moment(apiData?.snippet?.publishedAt).fromNow()}
      </div>

      {/* Video Actions */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6">
        <span className="flex items-center gap-2 cursor-pointer">
          <img src={like} alt="like" className="w-5" />{" "}
          {valueConverter(apiData?.statistics?.likeCount)}
        </span>
        <span className="flex items-center gap-2 cursor-pointer">
          <img src={dislike} alt="dislike" className="w-5" /> 25
        </span>
        <span className="flex items-center gap-2 cursor-pointer">
          <img src={share} alt="share" className="w-5" /> Share
        </span>
        <span className="flex items-center gap-2 cursor-pointer">
          <img src={save} alt="save" className="w-5" /> Save
        </span>
      </div>

      <hr className="mb-6" />

      {/* Publisher Section */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
        <img
          src={chanelData?.snippet.thumbnails.default.url}
          alt="channel"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <p className="font-semibold text-lg">
            {apiData?.snippet.channelTitle || "Channel Title"}
          </p>
          <span className="text-gray-500 text-sm">
            {valueConverter(chanelData?.statistics?.subscriberCount)}{" "}
            Subscribers
          </span>
          <p className="mt-2 text-gray-700">
            {apiData?.snippet?.description?.slice(0, 585)}.
          </p>
        </div>
        <button className="bg-red-600 text-white font-medium px-4 py-2 rounded hover:bg-red-700 mt-2 sm:mt-0">
          Subscribe
        </button>
      </div>

      <hr className="mb-6" />

      {/* Comments Section */}
      <h4 className="font-semibold text-lg mb-4">
        {valueConverter(apiData?.statistics?.commentCount)} Comments
      </h4>

      {commentsData.map((comment, index) => {
        const profileImg =
          comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl ||
          user;

        return (
          <div key={index} className="flex items-start gap-4 mb-6">
            <img
              src={profileImg}
              alt="user"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-medium">
                {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
              </h3>
              <p className="text-gray-700 mt-1">
                {comment?.snippet?.topLevelComment?.snippet?.textDisplay}
              </p>

              {/* Comment Actions */}
              <div className="flex items-center gap-3 mt-2">
                <img src={like} alt="like" className="w-4 cursor-pointer" />
                <span className="text-sm text-gray-600">
                  {comment?.snippet?.topLevelComment?.snippet?.likeCount}
                </span>
                <img
                  src={dislike}
                  alt="dislike"
                  className="w-4 cursor-pointer"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlayVideo;
