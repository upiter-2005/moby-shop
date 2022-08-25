import React from 'react';
import styles from './Home.module.scss';

import Product from '../components/Product';
import Filter from '../components/Filter';
import Skeleton from '../components/Skeleton';
import Sort from '../components/Sort';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';
import { setCategory } from '../redux/slices/filterSlice';

export const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.product.items);
  const status = useSelector((state) => state.product.status);
  const activeCategory = useSelector((state) => state.filter.catId);

  const getProducts = async () => {
    try {
      dispatch(fetchProducts({ cat: activeCategory }));
    } catch (error) {
      console.log('Bad connection');
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    dispatch(fetchProducts({ cat: activeCategory }));
  }, [activeCategory]);

  const handleCat = (obj) => {
    dispatch(setCategory(obj));
  };

  const skeleton = [...new Array(9)].map((item, i) => <Skeleton key={i} />);
  const products = items.map((obj) => <Product {...obj} key={obj.id} />);
  return (
    <>
      <section className={styles.catalog}>
        <Filter changeCat={handleCat} activeCategory={activeCategory} />
        <div className={styles.catalog__items}>
          <div className={styles.catalog_sort}>
            <Sort />
          </div>
          {status === 'loading' ? skeleton : products}
        </div>
      </section>
    </>
  );
};
