import React from 'react'
import video from '../assets/video.mp4'

const PlayingVideo = () => {
  return (
    <div className='mt-32'>
      {/* <div className='playvideo'>
         <video src={videoo2} controls autoPlay muted></video>
     </div> */}

     <video src={video} controls autoPlay muted></video>
     </div>
  )
}

export default PlayingVideo