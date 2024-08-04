import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/NotFoundPage.module.css'; // Correct path and usage

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFoundTitle}>404 - Page Not Found</h1>
      <p className={styles.notFoundMessage}>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className={styles.notFoundLink}>Go Back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
