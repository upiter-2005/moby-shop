import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__navigation}>
        <Link to="/" className={styles.header__navigationLink}>
          Home
        </Link>
        <Link to="/about" className={styles.header__navigationLink}>
          About
        </Link>
        <Link to="/cart" className={styles.header__navigationLink}>
          Cart
        </Link>
      </nav>

      <div className={styles.header__logo}>Smartfone store</div>

      <div className={styles.card}>
        <span className="material-symbols-outlined"> shopping_cart </span>
        <span className={styles.card__count}>0</span>
      </div>
    </header>
  );
};

export default Header;
