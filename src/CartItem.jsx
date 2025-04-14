import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './CartItem.css';
//import { removeItem, increaseItem, updateQuantity } from './CartSlice.';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  //const removeItem = removeItem();
  //const updateQuantity = updateQuantity();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
      let total = 0;
      cart.forEach((items)=>{
        total += parseFloat(items.cost.substring(1)) * items.quantity;
      });
      return total;
  };

  const handleContinueShopping = (e) => {
        alert('Functionality to be added for future reference');
        onContinueShopping(e);
  };



  const handleIncrement = (item,cartitem) => {
    console.log("si esta entrando al incremento");
    if (item.quantity > 0){
       dispatch(increaseItem(item));
       dispatch(updateQuantity(item.quantity));
    }
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1){
        dispatch(decreaseItem(item));
        dispatch(updateQuantity(item.quantity));
    }else{
        dispatch(removeItem(item));
    }
  };

  const handleRemove = (item) => {
        console.log("No esta borrando");
        dispatch(removeItem(item));
  };

  const calculateTotalCost = (item) => {
    
        let total = parseFloat(item.cost.substring(1));
        let subtotal = total * item.quantity;
        return subtotal;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


