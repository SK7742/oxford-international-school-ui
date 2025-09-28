import React from 'react';
import { useAuth } from '../../context/AuthContext';
import styles from './Profile.module.css';
import { FaUserShield, FaUserTie, FaChalkboardTeacher, FaUserGraduate, FaUser } from 'react-icons/fa';

const UserProfile = () => {
    const { user } = useAuth();

    const getProfileIcon = () => {
        switch (user?.role) {
            case 'superuser':
                return <FaUserShield className={styles.profileIcon} />;
            case 'admin':
                return <FaUserTie className={styles.profileIcon} />;
            case 'teacher':
                return <FaChalkboardTeacher className={styles.profileIcon} />;
            case 'student':
                return <FaUserGraduate className={styles.profileIcon} />;
            default:
                return <FaUser className={styles.profileIcon} />;
        }
    };

    const renderRoleSpecificDetails = () => {
        switch (user?.role) {
            case 'superuser':
                return (
                    <>
                        <p><strong>Permissions:</strong> Full System Access</p>
                        <p><strong>Last Login:</strong> {new Date().toLocaleString()}</p>
                    </>
                );
            case 'admin':
                return (
                    <>
                        <p><strong>Department:</strong> Administration</p>
                        <p><strong>Contact:</strong> {user?.username}@oxford.school</p>
                    </>
                );
            case 'teacher':
                return (
                    <>
                        <p><strong>Subject:</strong> Computer Science</p>
                        <p><strong>Class:</strong> 10-B</p>
                    </>
                );
            case 'student':
                return (
                    <>
                        <p><strong>Student ID:</strong> OX-2025-12345</p>
                        <p><strong>Grade:</strong> 10</p>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.profileCard}>
            <div className={styles.profileHeader}>
                {getProfileIcon()}
                <h2>{user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : 'User'} Profile</h2>
            </div>
            <div className={styles.profileDetails}>
                <p><strong>Username:</strong> {user?.username}</p>
                <p><strong>Role:</strong> {user?.role}</p>
                {renderRoleSpecificDetails()}
            </div>
        </div>
    );
};

export default UserProfile;
