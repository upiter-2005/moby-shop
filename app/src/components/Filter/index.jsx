import React from 'react';
import styles from './Filter.module.scss';

const Filter = () => {
  return (
    <div className={styles.catalog__filter}>
      <div className={styles.catalog__searchBlock}>
        <input type="text" className={styles.catalog__searchField} placeholder="Search..." />
      </div>
      <ul className={styles.catalog__categories}>
        <li className={styles.catalog__item}>
          <button className={styles.catalog__link}>All</button>
          <span className={styles.catalog__count}></span>
        </li>
        <li className={styles.catalog__item}>
          <button className={styles.catalog__link}>iPhone</button>
          <span className={styles.catalog__count}></span>
        </li>
        <li className={styles.catalog__item}>
          <button className={styles.catalog__link}>xiaomi</button>
          <span className={styles.catalog__count}></span>
        </li>
        <li className={styles.catalog__item}>
          <button className={styles.catalog__link}>huawei</button>
          <span className={styles.catalog__count}></span>
        </li>
        <li className={styles.catalog__item}>
          <button className={styles.catalog__link}>samsung</button>
          <span className={styles.catalog__count}></span>
        </li>
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
