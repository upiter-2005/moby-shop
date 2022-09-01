import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Cart.module.scss";
import MiniCartItem from "../MiniCartItem";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const count = useSelector((state) => state.cart.count);
  const total = useSelector((state) => state.cart.total);
  const cartEl = useRef();
  const closeEl = useRef();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      const event = e;
      if (cartEl.current && !event.path.includes(cartEl.current)) {
        setActive(false);
      }
      if (event.path.includes(closeEl.current)) {
        setActive(false);
      }
    };
    document.body.addEventListener("click", handleClick);

    return () => document.body.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className={styles.card} onClick={() => setActive(true)} ref={cartEl}>
      <span className="material-symbols-outlined"> shopping_cart </span>
      <span className={styles.card__count}>{count}</span>

      <div
        className={
          active ? `${styles.cart} ${styles.activeCart}` : `${styles.cart}`
        }
      >
        <button
          type="button"
          className={styles.close}
          onClick={() => setActive(false)}
          ref={closeEl}
        >
          x
        </button>
        <div className={styles.cart__title}>My Cart</div>
        <div className={styles.cart__list}>
          {items.map((obj) => (
            <MiniCartItem {...obj} key={obj.id} />
          ))}
        </div>
        <div className={styles.cart__total}>
          Total: <span id="total">{total} </span> UAH
        </div>
        <Link to="/cart" className={styles.checkout}>
          To cart page
        </Link>
      </div>
    </div>
  );
};
export default Cart;
