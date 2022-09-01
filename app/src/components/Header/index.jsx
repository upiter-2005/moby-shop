import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Cart from "../Cart";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.header__wrapper}>
      <nav className={styles.header__navigation}>
        <Link to="/" className={styles.header__navigationLink}>
          Home
        </Link>
        <Link to="/cart" className={styles.header__navigationLink}>
          Cart
        </Link>
        <Link to="/favorite" className={styles.header__navigationLink}>
          Favorite
        </Link>
      </nav>

      <div className={styles.header__logo}>Smartfone store</div>

      <div className={styles.header__icons}>
        <Cart />
        <Link
          to="/favorite"
          className="material-symbols-outlined favorite__icon"
        >
          heart_plus
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
