import React from 'react';
import styles from './Home.module.scss';

import Product from '../components/Product';
import Filter from '../components/Filter';
import Skeleton from '../components/Skeleton';
import Sort from '../components/Sort';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, searchProduct } from '../redux/slices/productSlice';
import { setCategory } from '../redux/slices/filterSlice';

export const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.product.items);
  const status = useSelector((state) => state.product.status);
  const activeCategory = useSelector((state) => state.filter.catId);
  const sort = useSelector((state) => state.filter.sort);

  const getProducts = async () => {
    try {
      dispatch(fetchProducts());
    } catch (error) {
      console.log('Bad connection');
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    const cat = activeCategory === 'All' ? '' : activeCategory;
    const sortBy = sort.nameProp.replace('-', '');
    const orderBy = sort.nameProp.includes('-') ? 'desc' : 'asc';

    dispatch(fetchProducts({ cat, sortBy, orderBy }));
  }, [activeCategory, sort]);

  const handleCat = (obj) => {
    dispatch(setCategory(obj));
  };
  const getSearchProduct = (value) => {
    dispatch(searchProduct(value));
  };

  const skeleton = [...new Array(9)].map((item, i) => <Skeleton key={i} />);
  const products = items.map((obj) => <Product {...obj} key={obj.id} />);
  return (
    <>
      <div className={styles.catalog_sort}>
        <Sort />
      </div>

      <section className={styles.catalog}>
        <Filter
          changeCat={handleCat}
          activeCategory={activeCategory}
          getSearchProduct={getSearchProduct}
        />
        <div className={styles.catalog__items}>{status === 'loading' ? skeleton : products}</div>
      </section>
    </>
  );
};
