import React from 'react'
import video1 from "../assets/video.mp4"
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import share from '../assets/share.png'
import save from '../assets/save.png'
import jack from '../assets/jack.png'
import user from '../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className="pl-[20%] pr-4 pt-4 basis-[69%] ">
      {/* Video Player */}
      <video src={video1} controls autoPlay muted className="w-full rounded-lg mb-4" />

      {/* Video Title */}
      <h3 className="text-xl font-semibold mb-1">Best TDollar</h3>

      {/* Video Info */}
      <div className="text-sm text-gray-500 mb-4">
        1,522 Views • 2 days ago
      </div>

      {/* Video Actions */}
      <div className="flex items-center gap-6 mb-6">
        <span className="flex items-center gap-2 cursor-pointer">
          <img src={like} alt="like" className="w-5" /> 125
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
      <div className="flex items-start gap-4 mb-6">
        <img src={jack} alt="channel" className="w-12 h-12 rounded-full" />
        <div className="flex-1">
          <p className="font-semibold text-lg">TDollar</p>
          <span className="text-gray-500 text-sm">10M Subscribers</span>
          <p className="mt-2 text-gray-700">Channel that makes learning easy. Subscribe to learn much easier.</p>
        </div>
        <button className="bg-red-600 text-white font-medium px-4 py-2 rounded hover:bg-red-700">
          Subscribe
        </button>
      </div>

      <hr className="mb-6" />

      {/* Comments Section */}
      <h4 className="font-semibold text-lg mb-4">1,579 Comments</h4>

      {[1, 2, 3, 4].map((comment, index) => (
        <div key={index} className="flex items-start gap-4 mb-6">
          <img src={user} alt="user" className="w-10 h-10 rounded-full" />
          <div className="flex-1">
            <h3 className="font-medium">
              Jack Marky <span className="text-gray-500 text-sm ml-2">1 day ago</span>
            </h3>
            <p className="text-gray-700 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat voluptate debitis odio culpa a.
            </p>

            {/* Comment Actions */}
            <div className="flex items-center gap-3 mt-2">
              <img src={like} alt="like" className="w-4 cursor-pointer" />
              <span className="text-sm text-gray-600">254</span>
              <img src={dislike} alt="dislike" className="w-4 cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PlayVideo
