import React from 'react'
import { Link } from 'react-router-dom';

const Video = (video) => {
    console.log(video);
  return (
    <div className='mt-32'>
        <Link to={`/video/${video?.videoId}`}>
        <div>
            <div>
                <img src={video?.thumbnails[0]?.url} alt="" />
            </div>
        </div>
        </Link>
        
        {/* <Link to={`/video/${video?.videoId}`}>
        <div>
            <div>
                <img src={video?.thumbnails[1]?.url} alt="" />
            </div>
        </div>
        </Link> */}
    </div>
  )
}

export default Video