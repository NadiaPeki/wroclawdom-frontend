import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Rent from './Pages/Rent/Rent'
import BuySell from './Pages/BuySell/BuySell'
import Architecture from './Pages/Architecture/Architecture'
import NotFound from './Pages/NotFound/NotFound';
import MainLayout from './layouts/MainLayout'
import FullPost from './components/FullPost/FullPost'
import SearchPage from './Pages/SearchPage/SearchPage'



function App() {
  return <BrowserRouter>
  <div className="App">
   
    <Routes>
    
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="wynajem" element={<Rent />} />
        <Route path="zakupisprzedaz" element={<BuySell />} />
        <Route path="designiarchitektura" element={<Architecture />} />
        <Route path="/posts/:slug" element={<FullPost />} />
        <Route path="/szukaj" element={<SearchPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
   
  </div>
</BrowserRouter>
}

export default App
