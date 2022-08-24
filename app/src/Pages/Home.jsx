import React from 'react';
import styles from './Home.module.scss';

import Product from '../components/Product';
import Filter from '../components/Filter';

export const Home = () => {
  return (
    <>
      <section className="breadcrumbs">
        <div className="breadcrumbs__wrapper">
          <a href="#" className="breadcrumbs__link active">
            Home
          </a>
          <span className="breadcrumbs__link">Products</span>
        </div>
      </section>

      <section className={styles.catalog}>
        <Filter />
        <div className={styles.catalog__items}>
          <Product />
        </div>
      </section>
      {/* 
      <div className="cart">
        <div className="cart__title">My Cart</div>
        <div className="cart__list">
          <div className="cart__item" data-id="0">
            <img src="images/products/galaxy-a32.jpeg" className="cart__item-image" />
            <div className="cart__item-data">
              <h4 className="cart__item-title">Samsung Galaxy S22 Ultra 12/256 GB Phantom</h4>
              <div className="cart__item-price">12000 UAH</div>
              <button className="remove" data-id="0">
                remove
              </button>
            </div>
            <div className="cart__number-input input-number">
              <button className="minus material-symbols-outlined">expand_more</button>
              <input className="quantity" min="0" name="quantity" value="1" type="number" />
              <button className="plus material-symbols-outlined">expand_less</button>
            </div>
          </div>
        </div>
        <div className="cart__total">
          Total: <span id="cart__total-calc">45 876 </span> UAH
        </div>
        <button className="checkout">checkout</button>
      </div> */}
    </>
  );
};
