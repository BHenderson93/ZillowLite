import './App.css';
import { Routes, Route , Navigate} from 'react-router-dom';
import EditPage from '../Edit/Edit'
import HomePage from '../Home/Home';
import DetailPage from '../Detail/Detail';

export default function App() {
  return (
    <Routes>
      <Route path="/detail" element={<DetailPage />} />
      <Route path="/edit" element={<EditPage />}/>
      <Route path="/*" element={<HomePage />}/>
    </Routes>
  );
}
