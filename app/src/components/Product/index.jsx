import React from 'react';
import styles from './Product.module.scss';

const Product = ({ id, name, price, img, brand }) => {
  return (
    <div className={styles.product}>
      <div className={styles.product__imageBlock}>
        <img src={img} alt="" className={styles.product__pic} />
      </div>
      <div className={styles.product__title}>{name}</div>
      <div className={styles.product__price}>{price} UAH</div>
      <button className={styles.product__addToCart}>
        <span className="material-symbols-outlined"> shopping_cart </span>
      </button>
    </div>
  );
};

export default Product;
