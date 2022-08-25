import React from 'react';
import styles from './Home.module.scss';

import Product from '../components/Product';
import Filter from '../components/Filter';
import Skeleton from '../components/Skeleton';

import { productsUrl } from '../apiUrls/api';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';

export const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.product.items);
  const status = useSelector((state) => state.product.status);

  const getProducts = async () => {
    try {
      dispatch(fetchProducts(productsUrl));
    } catch (error) {
      console.log('Bad connection');
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const skeleton = [...new Array(9)].map((item, i) => <Skeleton key={i} />);
  const products = items.map((obj) => <Product {...obj} key={obj.id} />);
  return (
    <>
      <section className={styles.catalog}>
        <Filter />
        <div className={styles.catalog__items}>{status === 'loading' ? skeleton : products}</div>
      </section>
    </>
  );
};
