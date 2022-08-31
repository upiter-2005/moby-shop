import React from 'react';

import CartItem from '../components/CartItem';
import styles from './Cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
export function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.total);

  const existProduct = items.map((obj) => <CartItem {...obj} key={obj.id} />);
  const noProducts = (
    <span className="material-symbols-outlined noProduct">production_quantity_limits</span>
  );
  return (
    <div className={styles.cart__container}>
      {console.log(items.length < 1)}
      {existProduct.length !== 0 ? existProduct : noProducts}

      <div className={styles.cart__total}>Total price :{totalPrice}</div>
    </div>
  );
}
