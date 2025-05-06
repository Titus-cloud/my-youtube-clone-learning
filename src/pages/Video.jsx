import React from 'react'
import PlayVideo from '../components/PlayVideo'
import Recomended from '../components/Recomended'
import { useStateContext } from '../../context'
import { useParams } from 'react-router-dom'
const Video = () => {
  const {videoId, categoryId} = useParams ()
  return (
    <div className='pl-[2%] pr-[2%] pt-5 pb-5 flex justify-between flex-wrap bg-[#f9f9f9]  '>
      <PlayVideo videoId={videoId}/>
      <Recomended categoryId={categoryId}/>
    </div>
  )
}

export default Video
