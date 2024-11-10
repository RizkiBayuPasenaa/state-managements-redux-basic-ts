import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { removeFromCart } from "../../slice/cartSlice";

function CartItemList() {
  const cartItems = useSelector((state: RootState) => state.cart.items); // Get items from Redux store
  const dispatch = useDispatch();
  return (
    <div className="cart-items-container">
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <h4>{item.price}</h4>
          <button onClick={() => dispatch(removeFromCart({id: item.id}))}>Remove From Card</button>
        </div>
      ))}
    </div>
  );
}

export default CartItemList;