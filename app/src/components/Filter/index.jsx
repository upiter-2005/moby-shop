import React from 'react';
import styles from './Filter.module.scss';

const Filter = ({ changeCat, activeCategory }) => {
  const cats = ['All', 'iPhone', 'xiaomi', 'huawei', 'samsung', 'realme', 'zte'];

  return (
    <div className={styles.catalog__filter}>
      <div className={styles.catalog__searchBlock}>
        <input type="text" className={styles.catalog__searchField} placeholder="Search..." />
      </div>
      <ul className={styles.catalog__categories}>
        {cats.map((obj, i) => (
          <li
            className={
              activeCategory === obj
                ? `${styles.activeCategory} ${styles.catalog__item}`
                : `${styles.catalog__item}`
            }
            key={i}
            onClick={() => changeCat(obj)}>
            {obj}
          </li>
        ))}
      </ul>

      {/* <div className="catalog__price-range">
        <p className="label-title">Price (less then):</p>
        <div className="group-center">
          <input type="range" id="range" min="0" value="50000" max="50000" />
          <span id="income">50000 UAH</span>
        </div>
      </div> */}
      <h3 className={styles.catalog__paramsTitle}>Used Params:</h3>
      <div className={styles.catalog__params}>
        <span>All</span>
        <span>50000</span>
      </div>
      <button className={styles.catalog__clearFilter}>Clear Filter</button>
    </div>
  );
};
export default Filter;
