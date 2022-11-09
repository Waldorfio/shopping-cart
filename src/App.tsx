import './styles/style.css';
import {Link, Outlet} from 'react-router-dom'
import React, { SyntheticEvent, useState, useRef } from 'react';
import CartProducts from './components/CartProducts';

// interface Cart {
//   size: number;
//   games: string[];
//   prices: string[];
//   subtotal: number,
// }

function App() {
  // State Declarations
  const [cart, setCart] = useState(
    [
      {title: '', price: ''},
    ]
  );

  // Declaring Refs for DOM Manipulation
  const cartRef = useRef<HTMLDivElement>(null);
  const cartPopupRef = useRef<HTMLDivElement>(null);

  // DOM Handler Functions
  function showCart() {
    const cartPopup = cartPopupRef.current;
    // Show Element if clicked button, and not already visible
    if (cartPopup!.style.display == 'none') {
      cartPopup!.style.display = '';
    // Else hide element if already shown, and button was clicked
    } else {
        cartPopup!.style.display = 'none';
    }
  }

  function exitCart(e: SyntheticEvent) {
    const cartPopup = cartPopupRef.current;
    const cart = cartRef.current;
    if (e.target !== cartPopup && e.target !== cart) {
      cartPopup!.style.display = "none";
    }
  }

  // State Handler
  function addToCart(newGame: any, newPrice: any) {
    setCart((prevState) => ([...prevState, {title: newGame, price: newPrice}]))
  }

  return (
    <div id='container' onClick={exitCart}>

      <div id='header'>
        <div id='header_one'>
          <Link id='logo' to='/'>Another Key Shop</Link>
        </div>
        <div id='header_two'>

          <Link id='home' to='/'>Home</Link>
          <Link id='shop' to='/shop'>Shop</Link>
          <Link id='about' to='/about'>About</Link>
          <div id='cart-container'>
            <span onClick={showCart} ref={cartRef} id='cart' className="material-symbols-outlined">shopping_cart</span>
            <div id='cart-size'>{cart.length - 1}</div>
          </div>
        </div>
      </div>

      <Outlet context={addToCart}/>

      <div id="cart-popup-container">
        <div ref={cartPopupRef} id="cart-popup" style={{display: 'none'}}>
          <div className='cart-text'>
            MY CART
            <span className='sub-cart'>{cart.length - 1} ITEMS</span>
            <div id='close-cart'>x</div>
          </div>
          <div id='cart-content'>
            { cart.map((idx) => (< CartProducts title = {idx.title} price={idx.price} />))}
          </div>
          <div id='cart-footer'>
            <div id='subtotal' className='sub-cart'>SUBTOTAL</div>
            <div id='total-price' className='cart-text'>AU${cart.length - 1}</div>
            <button id='checkout-btn'>CHECKOUT</button>
          </div>
        </div> 
      </div>

      <div id="footer">
          <span id='footer-title'>Copyright © 2022 Waldorfio&nbsp;&nbsp;&nbsp;
            <img id='git' src={require('./img/github-logo.png')} alt={'github-logo'}></img>
          </span>
      </div>

    </div>
  );
}

export default App;
