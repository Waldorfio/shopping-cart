import './styles/style.css';
import {Link, Outlet} from 'react-router-dom'
import React, { useState } from 'react';

function App() {
  // State Declarations
  const [cart, setCart] = useState(0);

  return (
    <div id='container'>

      <div id='header'>
        <div id='header_one'>
          <Link id='logo' to='/'>Another Key Shop</Link>
        </div>
        <div id='header_two'>

          <Link id='home' to='/'>Home</Link>
          <Link id='shop' to='/shop'>Shop</Link>
          <Link id='about' to='/about'>About</Link>
          <div id='cart-container'>
            <span id='cart' className="material-symbols-outlined">shopping_cart</span>
            <div id='cart-size'>{cart}</div>
          </div>
        </div>
      </div>

      <Outlet context={[cart, setCart]}/>

      <div id="footer">
          <span id='footer-title'>Copyright © 2022 Waldorfio&nbsp;&nbsp;&nbsp;
            <img id='git' src={require('./img/github-logo.png')} alt={'github-logo'}></img>
          </span>
      </div>

    </div>
  );
}

export default App;
