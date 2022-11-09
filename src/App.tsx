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
  // const [cart, setCart] = useState<Cart>({
  //   [
  //     {title: 'Elden Ring: Deluxe Edition - PC', price: 'AU$73.09', discount: '$97.49', img: 'elden.jpg'},
  //     {title: 'Yakuza Kiwami 2 - PC', price: 'AU$21.69', discount: 'AU$47.99', img: 'yak2.png'},
  //     {title: 'Dark Souls 2 (DLC) - PC', price: 'AU$22.19', discount: 'AU$58.49', img: 'ds2dlc.jpg'},
  //     {title: 'Dark Souls 2 - PC', price: 'AU$69.99', discount: 'AU$75.99', img: 'ds2.jpg'},
  //     {title: 'Dark Souls 3 - PC', price: 'AU$69.99', discount: 'AU$97.49', img: 'ds3.jpg'},
  //     {title: 'Sekiro: Shadows Die Twice - PC', price: 'AU$59.99', discount: 'AU$75.99', img: 'sekiro.jpg'},
  //   ],
  // });


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
            <div id='cart-size'>TEMP SIZE</div>
          </div>
        </div>
      </div>

      <Outlet context={addToCart}/>

      <div id="cart-popup-container">
        <div ref={cartPopupRef} id="cart-popup" style={{display: 'none'}}>
          <div className='cart-text'>
            MY CART
            <span className='sub-cart'>TEMP SIZE ITEMS</span>
            <div id='close-cart'>x</div>
          </div>
          <div id='cart-content'>
            { cart.map((idx) => (< CartProducts title = {idx.title} price={idx.price} />))}
          </div>
          <div id='cart-footer'>
            <div id='subtotal' className='sub-cart'>SUBTOTAL</div>
            <div id='total-price' className='cart-text'>AU$TEMP SIZE</div>
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
