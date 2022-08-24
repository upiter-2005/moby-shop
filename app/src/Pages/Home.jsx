import React from 'react';
import styles from './Home.module.scss';

import Product from '../components/Product';
import Filter from '../components/Filter';

import { productsUrl } from '../apiUrls/api';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await fetch(productsUrl)
      .then((data) => data.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <section className={styles.catalog}>
        <Filter />
        <div className={styles.catalog__items}>
          {products.map((obj) => (
            <Product {...obj} key={obj.id} />
          ))}
        </div>
      </section>
    </>
  );
};
