import Header from './components/Header';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import SavedDrops from './pages/SavedDrops';
import NotFound from './pages/NotFound';
import { SavedDropsProvider } from './contexts/SavedDropsContext';


function App() {
  return (
    <SavedDropsProvider>
    <BrowserRouter>
    <div className="app">
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/calendar' element={<Calendar />}/>
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