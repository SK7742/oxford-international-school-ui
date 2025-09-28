import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <a href="/" className={styles.logoLink}>
                    <h1>Oxford International School</h1>
                </a>
            </div>
            <nav className={styles.nav}>
                <Link to="/dashboard">Dashboard</Link>
                {user ? (
                    <button onClick={handleLogout} className={styles.navButton}>Logout</button>
                ) : (
                    location.pathname !== '/login' && <Link to="/login">Login</Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
