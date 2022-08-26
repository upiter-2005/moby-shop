import React from 'react';
import styles from './Cart.module.scss';
import { useRef, useEffect } from 'react';
const Cart = ({ openCart, setOpen }) => {
  return (
    <div className={openCart ? `${styles.cart} ${styles.activeCart}` : `${styles.cart}`}>
      <button className={styles.close} onClick={() => setOpen()}>
        x
      </button>
      <div className={styles.cart__title}>My Cart</div>
      <div className={styles.cart__list}>
        <div className={styles.cart__item} data-id="0">
          <img src="/images/products/galaxy-a32.jpeg" className={styles.cart__itemImage} />
          <div className={styles.cart__itemData}>
            <h4 className={styles.cart__itemTitle}>Samsung Galaxy S22 Ultra 12/256 GB Phantom</h4>
            <div className={styles.cart__itemPrice}>12000 UAH</div>
            <button className={styles.remove} data-id="0">
              remove
            </button>
          </div>
          <div className={styles.inputNumber}>
            <button className="minus material-symbols-outlined">expand_more</button>
            <input className="quantity" min="0" name="quantity" value="1" type="number" />
            <button className="plus material-symbols-outlined">expand_less</button>
          </div>
        </div>
      </div>
      <div className={styles.cart__total}>
        Total: <span id="total">45 876 </span> UAH
      </div>
      <button className={styles.checkout}>checkout</button>
    </div>
  );
};
export default Cart;
