import React, { useState } from 'react';
import styles from './AuthButtons.module.css';
import { FaUser, FaSignInAlt } from 'react-icons/fa';

const AuthButtons = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <div className={styles.authButtons}>
      <button className={styles.authButton} title='Zarejestruj się' onClick={handleRegisterClick}>
      <span className={styles.iconContainer}>
      <FaUser className={styles.icon} />
      </span>
      </button>
      <button className={styles.authButton} title='Zaloguj się' onClick={handleLoginClick}>
      <span className={styles.iconContainer}>
      <FaSignInAlt className={styles.icon}/> 
      </span>
      </button>

      {showRegisterModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <p>Ta funkcja jest obecnie w trakcie opracowywania.</p>
            <button className={styles.closeButton} onClick={handleCloseRegisterModal}>
              &times;
            </button>
          </div>
        </div>
      )}

      {showLoginModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <p>Ta funkcja jest obecnie w trakcie opracowywania.</p>
            <button className={styles.closeButton} onClick={handleCloseLoginModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthButtons;