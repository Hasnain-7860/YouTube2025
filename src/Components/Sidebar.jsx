import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiMusicNoteLight } from "react-icons/pi";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";




const Sidebar = () => {
    const sidebarItems=[
      {
        id:1,
        name:"Home",
        icon:<GoHome/>
      },
      {
        id:2,
        name:"Shorts",
        icon:<SiYoutubeshorts/>
      },
      {
        id:3,
        name:"Subscription",
        icon:< MdOutlineSubscriptions/>
      },
      // {
      //   id:3,
      //   name:"Subscription",
      //   icon:< MdOutlineSubscriptions/>
      // },
      
    ]
    const sidebarItems2=[
      {
        id:1,
        name:"Your Channel",
        icon:<GoHome/>
      },
      {
        id:2,
        name:"History",
        icon:<SiYoutubeshorts/>
      },
      {
        id:3,
        name:"Playlists",
        icon:< MdOutlineSubscriptions/>
      },
      {
        id:4,
        name:"Your Videos",
        icon:<FaYoutube />
      },
      {
        id:5,
        name:"Watch later",
        icon:< SiYoutubestudio />
      },
      {
        id:6,
        name:"Liked Videos",
        icon:< SiYoutubekids />
      },
      
    ]
    const sidebarItems3=[
      {
        id:1,
        name:"Trending",
        icon:<SiTrendmicro />
      },
      {
        id:2,
        name:"Shoping",
        icon:<HiOutlineShoppingBag  />
      },
      {
        id:3,
        name:"Music",
        icon:<PiMusicNoteLight />
      },
      {
        id:4,
        name:"Films",
        icon:<PiFilmSlateLight />
      },
      {
        id:5,
        name:"Live",
        icon:<CgMediaLive />
      },
      {
        id:6,
        name:"Gaming",
        icon:<SiYoutubegaming />
      },
      {
        id:7,
        name:"News",
        icon:< FaRegNewspaper/>
      },
      {
        id:8,
        name:"Sport",
        icon:<TfiCup />
      },
      {
        id:9,
        name:"Course",
        icon:< PiLightbulbLight/>
      },
      {
        id:9,
        name:"Fashion & beauty",
        icon:< SiStylelint/>
      },
      {
        id:9,
        name:"Padcaste",
        icon:< MdPodcasts/>
      },
    ]
   
    const sidebarItems4=[
      {
        id:1,
        name:"Settings",
        icon:<IoSettingsOutline/>
      },
      {
        id:2,
        name:"Report history",
        icon:<MdOutlineOutlinedFlag/>
      },
      {
        id:3,
        name:"Help",
        icon:< IoIosHelpCircleOutline/>
      },
      {
        id:4,
        name:"Send feedback",
        icon:< MdOutlineFeedback/>
      },
      
    ]
  return (
    <div className='px-6 w-[15%]  h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden mt-16'>
        <div className='space-y-3  items-center'>
          {sidebarItems.map((item)=>{
            return(
              <div className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
        <div className='text-xl cursor-pointer' >{item.icon}</div>
        <span className='cursor-pointer'>{item.name}</span>
        </div>
            )
          })}
            {/* <div className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
        <GoHome className='text-xl cursor-pointer' />
        <span className='cursor-pointer'>Home</span>
        </div>
        <div className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
        <SiYoutubeshorts className='text-xl cursor-pointer' />
        <span className='cursor-pointer'>Shorts</span>
        </div>
        <div className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
        < MdOutlineSubscriptions className='text-xl cursor-pointer' />
        <span className='cursor-pointer'>Subscription</span>
        </div> */}
        <br />
        <hr />
        
        </div>
        <div className='mt-4 space-y-3  items-center'>
          <div className='flex items-center space-x-2 hover:bg-gray-300 rounded-xl  p-1 duration-300'>
            <h1 className='font-semibold'>You</h1>
            <FaChevronRight/>

          </div>
          {sidebarItems2.map((item)=>{
            return(
              <div className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
        <div className='text-xl cursor-pointer' >{item.icon}</div>
        <span className='cursor-pointer'>{item.name}</span>
        </div>
            )
          })}
           <br /> 
        <hr />
        
        </div>
        <div className='mt-4 space-y-3  items-center'>
          <div className='flex items-center space-x-2 hover:bg-gray-300 rounded-xl  p-1 duration-300'>
            <h1 className='font-semibold'>Explore</h1>
    

          </div>
          {sidebarItems3.map((item)=>{
            return(
              <div className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
        <div className='text-xl cursor-pointer' >{item.icon}</div>
        <span className='cursor-pointer'>{item.name}</span>
        </div>
            )
          })}
           <br /> 
        <hr />
        
        </div>
        <div className='mt-4 space-y-3  items-center'>
          {/* <div className='flex items-center space-x-2 hover:bg-gray-300 rounded-xl  p-1 duration-300'>
            <h1 className='font-semibold'>More From Youtube</h1>
    

          </div> */}
          {sidebarItems4.map((item)=>{
            return(
              <div className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
        <div className='text-xl cursor-pointer ' >{item.icon}</div>
        <span className='cursor-pointer'>{item.name}</span>
        </div>
            )
          })}
           <br /> 
        <hr />
        </div> <br />
        <span className='text-xs  font-semibold  text-gray-500'>About Press Copyright<br />Contact usCreators<br />Advertise Developers<br />  <br />
        <p>
        Terms Privacy Policy & Safety<br />How YouTube works<br />Test new features
          </p>
          </span>
          <br />
          <p className='text-xs text-gray-800 mt-1'>© 2025 Google LLC</p>

        
{/*         
        <FaChevronRight />
        <FaYoutube />
        <SiYoutubestudio />
        <SiYoutubekids />
        <SiYoutubemusic />
        <SiTrendmicro />
        <HiOutlineShoppingBag />
        <PiMusicNoteLight />
        <PiFilmSlateLight />
        <CgMediaLive />
        <SiYoutubegaming />
        <FaRegNewspaper />
        <TfiCup />
        <PiLightbulbLight />
        <SiStylelint />
        <MdPodcasts /> */}



        










        

    </div>
  )
}

export default Sidebar