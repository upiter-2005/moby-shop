import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import styles from "./Cart.module.scss";

export function Cart() {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.total);

  const existProduct = items.map((obj) => <CartItem {...obj} key={obj.id} />);
  const noProducts = (
    <span className="material-symbols-outlined noProduct">
      production_quantity_limits
    </span>
  );

  return (
    <div className={styles.cart__container}>
      {existProduct.length !== 0 ? existProduct : noProducts}

      <div className={styles.cart__total}>Total price :{totalPrice}</div>
    </div>
  );
}
