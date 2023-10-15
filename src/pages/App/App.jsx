import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage'
import NavBar from '../../components/NavBar/NavBar';
import GamesDetail from '../GamesDetail/GamesDetail'

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/home" element={<HomePage />} />
              <Route path="/games/:id" element={<GamesDetail />} />  
              <Route path='/*' element={<Navigate to='/home' />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
