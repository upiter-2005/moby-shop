import { useDispatch } from "react-redux";
import styles from "./Product.module.scss";
import { addCart } from "../../redux/slices/cartSlice";

const Product = ({ id, name, price, img }) => {
  const dispatch = useDispatch();

  const clickAdd = () => {
    dispatch(
      addCart({
        id,
        name,
        price,
        img,
      })
    );
  };

  return (
    <div className={styles.product}>
      <div className={styles.product__imageBlock}>
        <img src={img} alt="" className={styles.product__pic} />
      </div>
      <div className={styles.product__title}>{name}</div>
      <div className={styles.product__price}>{price} UAH</div>
      <button
        type="button"
        className={styles.product__addToCart}
        onClick={clickAdd}
      >
        <span className="material-symbols-outlined"> shopping_cart </span>
      </button>
    </div>
  );
};

export default Product;
