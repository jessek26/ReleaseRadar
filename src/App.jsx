import Header from './components/Header';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import Home from './pages/Home';
import AlbumDetailsPage from './pages/AlbumDetailsPage';
import SavedDrops from './pages/SavedDrops';
import NotFound from './pages/NotFound';
import { SavedDropsProvider } from './contexts/SavedDropsContext';
import './App.css'

function App() {
  return (
    <SavedDropsProvider>
    <BrowserRouter>
    <div className="app">
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/album/:id' element={<AlbumDetailsPage />}/>
          <Route path='/saved-drops' element={<SavedDrops />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </main>
    </div>
    </BrowserRouter>
    </SavedDropsProvider>
  );
}

export default App; 