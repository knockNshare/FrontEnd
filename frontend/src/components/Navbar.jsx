import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Notifications from './Notifications';
import '../styles/Navbar.css';

const Navbar = () => {
  const { userId } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId"); // Supprimer l'ID utilisateur
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/dashboard" className="nav-link">🏠 Dashboard</Link>
        <Link to="/profile" className="nav-link">👤 Profil</Link>
        <Link to="/events" className="nav-link">📅 Événements</Link>
      </div>

      {userId && (
        <div className="nav-right">
          <Notifications />
          <button onClick={handleLogout} className="logout-button">🚪 Déconnexion</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;