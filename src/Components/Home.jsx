import React from 'react'
import Sidebar from "./Sidebar.jsx"
import Video from './Video'
import { useAuth } from '../Context/AuthProvider.jsx'

const Home = () => {
    const{data}=useAuth()
    console.log(data)
  return (
    <div className='flex' >
        <Sidebar/>
        <div>
            {
                    data.map((item)=>{
                        if(item.type!=="video") return false;
                        return(
                            <Video key={item.id} video={item?.video}/>
                        )
                 })
            }
        </div>
    </div>
  )
}

export default Home