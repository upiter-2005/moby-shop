import React from 'react';
import styles from './Home.module.scss';

import Product from '../components/Product';
import Filter from '../components/Filter';

import { productsUrl } from '../apiUrls/api';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';

export const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.items);
  //const [products, setProducts] = useState([]);

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

  return (
    <>
      <section className={styles.catalog}>
        <Filter />
        <div className={styles.catalog__items}>
          {products?.map((obj) => (
            <Product {...obj} key={obj.id} />
          ))}
        </div>
      </section>
    </>
  );
};
