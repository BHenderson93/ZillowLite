import './App.css'
import { Routes, Route , Navigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import EditPage from '../Edit/Edit'
import HomePage from '../Home/Home'
import DetailPage from '../Detail/Detail'
import { likeHome } from '../../utilities/homes-api'


export default function App() {
  const [activeHome, setActiveHome] = useState([])
  const [liked, setLiked] = useState(false)

  const handleLike = async (id) => {
    const res = await likeHome(id, liked? '-1' : '+1')
    console.log(res)
    if(res.increment){
        setActiveHome({...activeHome, likes:activeHome.likes + Number(liked? '-1' : '+1')})
        setLiked(!liked)
    }
  }

  const handleHomeClick = (home) => {
    if(home.id !== activeHome.id){
      setActiveHome(home)
      setLiked(false)
    }
  }

  return (
    <Routes>
      <Route path="/detail" element={<DetailPage home={activeHome} handleLike={handleLike} liked={liked}/>} />
      <Route path="/edit" element={<EditPage />}/>
      <Route path="/*" element={<HomePage handleHomeClick={handleHomeClick}/>}/>
    </Routes>
  );
}
