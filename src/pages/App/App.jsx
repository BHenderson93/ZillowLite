import './App.css'
import { Routes, Route , Navigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import EditPage from '../Edit/Edit'
import HomePage from '../Home/Home'
import DetailPage from '../Detail/Detail'


export default function App() {
  const [activeHome, setActiveHome] = useState([])

  return (
    <Routes>
      <Route path="/detail" element={<DetailPage />} />
      <Route path="/edit" element={<EditPage />}/>
      <Route path="/*" element={<HomePage/>}/>
    </Routes>
  );
}
