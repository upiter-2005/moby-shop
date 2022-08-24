import React from 'react';
import styles from './Product.module.scss';

const Product = () => {
  return (
    <div className={styles.product}>
      <div className={styles.product__imageBlock}>
        <img src="/img/galaxy-a32.jpeg" alt="" className={styles.product__pic} />
      </div>
      <div className={styles.product__title}>Samsung Galaxy S22 Ultra 12/256 GB Phantom</div>
      <div className={styles.product__price}>12000 UAH</div>
      <button className={styles.product__addToCart}>
        <span className="material-symbols-outlined"> shopping_cart </span>
      </button>
    </div>
  );
};

export default Product;
