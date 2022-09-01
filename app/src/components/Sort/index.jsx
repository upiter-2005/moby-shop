import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../../redux/slices/filterSlice";
import styles from "./Sort.module.scss";

const Sort = () => {
  const dispatch = useDispatch();
  const [activePopup, setActivePopup] = useState(false);
  const sort = useSelector((state) => state.filter.sort);
  const sortElement = useRef(null);
  const sortTypes = [
    { name: "By name Asc", nameProp: "name" },
    { name: "By name DESC", nameProp: "-name" },
    { name: "By price ASC", nameProp: "price" },
    { name: "By price DESC", nameProp: "-price" },
  ];
  useEffect(() => {
    const handleClick = (e) => {
      const event = e;
      if (sortElement.current && !event.path.includes(sortElement.current)) {
        setActivePopup(false);
      }
    };
    document.body.addEventListener("click", handleClick);

    return () => document.body.removeEventListener("click", handleClick);
  }, []);

  const changeSort = (obj) => {
    dispatch(setSort(obj));
  };

  return (
    <div
      className={styles.sort}
      ref={sortElement}
      onClick={() => setActivePopup(!activePopup)}
    >
      <div className={styles.sort__label}>
        Sort by: <span className={styles.sort__current}>{sort.name}</span>
      </div>
      {activePopup && (
        <ul className={styles.sort__list}>
          {sortTypes.map((obj, i) => (
            <li
              key={i}
              className={obj.name == sort.name ? `${styles.activeSort}` : ""}
              onClick={() => changeSort({ ...obj })}
            >
              {obj.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Sort;
