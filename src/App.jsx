import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Search from './Components/Search'
import PlayingVideo from './Components/PlayingVideo'
// import Video from './Components/Video'


const App = () => {
  // const{loading, data}=useAuth()
  // console.log(loading)
  // console.log(data)
  return (
    <div>
     
      <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/Search/:searchQuery' element={<Search/>} />
      <Route path='/video/:id' element={<PlayingVideo/>}/>
      {/* <Route path='/Video' element={<Video/>}/> */}
    </Routes>
      
    </div>
  )
}

export default App