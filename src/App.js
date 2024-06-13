import logo from './logo.svg';
import './App.css';
import AddShoe from './Components/AddShoe';
import SearchShoe from './Components/SearchShoe';
import ViewShoe from './Components/ViewShoe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<AddShoe/>}/>
      <Route path ="/search" element={<SearchShoe/>}/>
      <Route path ="/view" element={<ViewShoe/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
