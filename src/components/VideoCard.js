import React from 'react'

const VideoCard = ({info}) => {
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet
  return (
    <div className="p-2 m-2 w-72 shadow-lg flex flex-wrap">
       <img alt="src=https://" src={thumbnails.medium.url}/>
       <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>

       </ul>
    </div>
  )
}

export default VideoCard