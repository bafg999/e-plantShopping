import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  //const removeItem = removeItem();
  //const updateQuantity = updateQuantity();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
      total = 0;
      cart.forEach((items)=>{
        total += parseFloat(items.cost.substring(1)) * items.quantity;
      });
      return total;
  };

  const handleContinueShopping = (e) => {
        alert('Functionality to be added for future reference');
        onContinueShopping(e);
  };



  const handleIncrement = (item) => {
    if (CartItem > 0){
       dispatch(increaseItem(item));
    }
  };

  const handleDecrement = (item) => {
    if (CartItem > 1){
        dispatch(decreaseItem(item));
    }else{
        dispatch(removeItem);
    }
  };

  const handleRemove = (item) => {
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


