import React from 'react';
import styles from './Cart.module.scss';
import { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Cart = () => {
  const count = useSelector((state) => state.cart.count);
  const cartEl = useRef();
  const closeEl = useRef();
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handleClick = (e) => {
      const _event = e;
      if (cartEl.current && !_event.path.includes(cartEl.current)) {
        setActive(false);
      }
      if (_event.path.includes(closeEl.current)) {
        setActive(false);
      }
    };
    document.body.addEventListener('click', handleClick);

    return () => document.body.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <div className={styles.card} onClick={() => setActive(true)} ref={cartEl}>
        <span className="material-symbols-outlined"> shopping_cart </span>
        <span className={styles.card__count}>{count}</span>

        <div className={active ? `${styles.cart} ${styles.activeCart}` : `${styles.cart}`}>
          <button className={styles.close} onClick={() => setActive(false)} ref={closeEl}>
            x
          </button>
          <div className={styles.cart__title}>My Cart</div>
          <div className={styles.cart__list}>
            <div className={styles.cart__item} data-id="0">
              <img src="/images/products/galaxy-a32.jpeg" className={styles.cart__itemImage} />
              <div className={styles.cart__itemData}>
                <h4 className={styles.cart__itemTitle}>
                  Samsung Galaxy S22 Ultra 12/256 GB Phantom
                </h4>
                <div className={styles.cart__itemPrice}>12000 UAH</div>
              </div>
            </div>
          </div>
          <div className={styles.cart__total}>
            Total: <span id="total">45 876 </span> UAH
          </div>
          <Link to="/cart" className={styles.checkout}>
            To cart page
          </Link>
        </div>
      </div>
    </>
  );
};
export default Cart;
