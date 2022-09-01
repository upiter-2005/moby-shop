import { useDispatch } from "react-redux";
import styles from "./MiniCartItem.module.scss";
import { removeFromCart } from "../../redux/slices/cartSlice";

const MiniCartItem = ({ id, name, price, img, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.cart__item} data-id="0">
      <img src={img} alt="moby-shop" className={styles.cart__itemImage} />
      <div className={styles.cart__itemData}>
        <h4 className={styles.cart__itemTitle}>{name}</h4>
        <div className={styles.cart__itemPrice}>
          {price} UAH x {count}{" "}
        </div>
      </div>

      <button
        type="button"
        className={styles.cart__remove}
        onClick={() => dispatch(removeFromCart(id))}
      >
        x
      </button>
    </div>
  );
};
export default MiniCartItem;
