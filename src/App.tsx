import './styles/style.css';
import {Link, Outlet} from 'react-router-dom'
import React, { SyntheticEvent, useState, useRef } from 'react';

interface Cart {
  size: number;
  games: string[];
  prices: string[];
}

function App() {
  // State Declarations
  const [cart, setCart] = useState<Cart>({
    size: 0,
    games: [''],
    prices: [''],
  });

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
    setCart((prevState) => ({
      ...prevState,
      size: prevState.size + 1,
      games: [
        ...prevState.games,
        newGame,
      ],
      prices: [
        prevState.prices,
        newPrice,
      ],
    }))
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
            <div id='cart-size'>{cart.size}</div>
          </div>
        </div>
      </div>

      <Outlet context={addToCart}/>

      <div id="cart-popup-container">
        <div ref={cartPopupRef} id="cart-popup" style={{display: 'none'}}>
          <div className='cart-text'>
            MY CART
            <span className='sub-cart'>{cart.size} ITEMS</span>
            <div id='close-cart'>x</div>
          </div>
          <div id='cart-content'>
            {cart.games}
            {cart.prices}
          </div>
          <div id='cart-footer'>
            <div id='subtotal' className='sub-cart'>SUBTOTAL</div>
            <div id='total-price' className='cart-text'>AU$93.58</div>
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
