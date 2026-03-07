import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'; 
import SavedDrops from './pages/SavedDrops'
import AlbumDetailsPage from './pages/AlbumDetailsPage';
import Login from './pages/Login';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { SavedDropsProvider } from './contexts/SavedDropsContext';
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <SavedDropsProvider>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/saved-drops" element={
              <ProtectedRoute>
                <SavedDrops />
              </ProtectedRoute>
            } />
            <Route path="/album/:id" element={
              <ProtectedRoute>
                <AlbumDetailsPage />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </SavedDropsProvider>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;