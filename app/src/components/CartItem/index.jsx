import { useDispatch } from "react-redux";
import styles from "./CartItem.module.scss";

import {
  removeFromCart,
  plusCart,
  minusCart,
} from "../../redux/slices/cartSlice";
const CartItem = ({ id, name, price, img, count }) => {
  const dispatch = useDispatch();
  const minusHandler = () => {
    if (count > 1) {
      dispatch(minusCart(id));
    }
  };

  return (
    <div className={styles.cart__item} data-id="0">
      <img src={img} alt="moby-shop" className={styles.cart__itemImage} />
      <div className={styles.cart__itemData}>
        <h4 className={styles.cart__itemTitle}>{name}</h4>
        <div className={styles.cart__itemPrice}>
          {price} UAH x {count}
        </div>
      </div>
      <div className={styles.cart__itemQty}>
        <button
          type="button"
          className={styles.cart__itemPlus}
          onClick={() => dispatch(plusCart(id))}
        >
          +
        </button>
        <span className={styles.cart__itemCount}>{count}</span>
        <button
          type="button"
          className={styles.cart__itemMinus}
          onClick={minusHandler}
        >
          -
        </button>
      </div>
      <button
        type="button"
        className={styles.remove}
        onClick={() => dispatch(removeFromCart(id))}
      >
        x
      </button>
    </div>
  );
};
export default CartItem;
