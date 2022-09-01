import { useRef, useState, useCallback } from "react";
import debounce from "lodash.debounce";
import styles from "./Filter.module.scss";

const Filter = ({ changeCat, activeCategory, getSearchProduct }) => {
  const cats = [
    "All",
    "iPhone",
    "xiaomi",
    "huawei",
    "samsung",
    "realme",
    "zte",
  ];
  const searchEl = useRef();
  const [value, setValue] = useState("");
  const sendSearch = useCallback(
    debounce((val) => {
      getSearchProduct(val);
    }, 1400),
    []
  );

  const searchProduct = () => {
    sendSearch(searchEl.current.value);
    setValue(searchEl.current.value);
  };

  return (
    <div className={styles.catalog__filter}>
      <div className={styles.catalog__searchBlock}>
        <input
          type="text"
          className={styles.catalog__searchField}
          placeholder="Search..."
          ref={searchEl}
          onChange={searchProduct}
          value={value}
        />
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
            onClick={() => changeCat(obj)}
          >
            {obj}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Filter;
