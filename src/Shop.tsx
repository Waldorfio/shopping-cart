import {Link} from 'react-router-dom'
import React, { useState, useEffect } from "react";
import Products from './components/Products'

const Shop = () => {
    // State Declarations
    const [cart, setCart] = useState(0)
    const [games, setGames] = useState(
      [
        {title: 'Elden Ring: Deluxe Edition - PC', price: 'AU$73.09', discount: '$97.49', img: 'elden.jpg'},
        {title: 'Yakuza Kiwami 2 - PC', price: 'AU$21.69', discount: 'AU$47.99', img: 'yak2.png'},
        {title: 'Dark Souls 2 (DLC) - PC', price: 'AU$22.19', discount: 'AU$58.49', img: 'ds2dlc.jpg'},
        {title: 'Dark Souls 2 - PC', price: 'AU$69.99', discount: 'AU$75.99', img: 'ds2.jpg'},
        {title: 'Dark Souls 3 - PC', price: 'AU$69.99', discount: 'AU$97.49', img: 'ds3.jpg'},
        {title: 'Sekiro: Shadows Die Twice - PC', price: 'AU$59.99', discount: 'AU$75.99', img: 'sekiro.jpg'},
      ]
    )

    // State Handlers
    function addToCart() {
      setCart(cart + 1);
      alert('added to cart!'+cart)
    }

    return (
      <div id='shop-content'>
        { games.map((idx) => (
          < Products 
            title = {idx.title}
            price = {idx.price}
            discount = {idx.discount}
            img = {idx.img}
            addToCart = {addToCart}
          />
        ))}
      </div>
      
    );
  };
  
  export default Shop;
  