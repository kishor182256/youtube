import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { YTAPI } from '../utils/constants'
import VideoCard from './VideoCard'

const VideoContainer = () => {

  const [videos,setVideos] = useState([])


  const data =async()=> {
    const data = await fetch(YTAPI)
    const video =await data.json();
    setVideos(video.items)
  }

  useEffect(()=> {
    data()
  },[])
  return (
    <div className="flex flex-wrap">
{     videos?.map((v)=> {
        return (
          <Link to={`/watch?v=${v.id}`}>
            <VideoCard className="cursor-pointer" key={v.id} info={v}/></Link>
        )
}) 
}    </div>
  )
}

export default VideoContainer