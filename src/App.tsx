import './styles/style.css';
import {Link, Outlet} from 'react-router-dom'
import React, { SyntheticEvent, useState } from 'react';

function App() {
  // State Declarations
  const [cart, setCart] = useState(0);

  function addToCart() {
    setCart(cart + 1);
  }

  function showCart(e: SyntheticEvent) {
    const cartP: any = document.getElementById('cart-popup');
    if (cartP.style.display == 'none') { // Then show element
      cartP.style.display = '';
    } else { // Hide element
        cartP.style.display = 'none';
    }
  }

  function exitCart(e: SyntheticEvent) {
    const cartP: any = document.getElementById('cart-popup');
    const btn: any = document.getElementById('cart');
    if (e.target !== cartP && e.target !== btn) {
      cartP.style.display = "none";
    }
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
            <span onClick = {showCart} id='cart' className="material-symbols-outlined">shopping_cart</span>
            <div id='cart-size'>{cart}</div>
          </div>
        </div>
      </div>

      <Outlet context={addToCart}/>

      <div id="cart-popup-container">
        <div id="cart-popup" style={{display: 'none'}}>
          <div className='cart-text'>
            MY CART
            <span className='sub-cart'>{cart} ITEMS</span>
            <div id='close-cart'>x</div>
          </div>
          <div id='cart-content'>
            You have no items in your shopping cart.
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
