import {Link} from 'react-router-dom'

const Shop = () => {
    return (
      <div id='shop-content'>


        <div className='product'>
          <img className='product-img' src='https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg'></img>
          <div className='product-title'>Elden Ring DELUXE EDITION - PC</div>
          <div className='product-price'>AU$73.09</div>
          <div className='product-discount'>AU$97.49</div>
          <span className="material-symbols-outlined">add_shopping_cart</span>
        </div>

        <div className='product'>
          <img className='product-img' src='https://upload.wikimedia.org/wikipedia/en/7/7f/Yakuza_Kiwami_2.png'></img>
          <div className='product-title'>Yakuza Kiwami 2 - PC</div>
          <div className='product-price'>AU$21.69</div>
          <div className='product-discount'>AU$47.99</div>
          <span className="material-symbols-outlined">add_shopping_cart</span>
        </div>

        <div className='product'>
          <img className='product-img' src='https://i.redd.it/1mu3vxj97sm81.jpg'></img>
          <div className='product-title'>Dark Souls 2: Scholars of the first sin - PC</div>
          <div className='product-price'>AU$22.19</div>
          <div className='product-discount'>AU$58.49</div>
          <span className="material-symbols-outlined">add_shopping_cart</span>
        </div>

        <div className='product'>
          <img className='product-img' src='https://upload.wikimedia.org/wikipedia/en/e/ed/Dark_Souls_II_cover.jpg'></img>
          <div className='product-title'>Dark Souls 2 - PC</div>
          <div className='product-price'>AU$75.99</div>
          <div className='product-discount'>AU$75.99</div>
          <span className="material-symbols-outlined">add_shopping_cart</span>
        </div>

        <div className='product'>
          <img className='product-img' src='https://upload.wikimedia.org/wikipedia/en/b/bb/Dark_souls_3_cover_art.jpg'></img>
          <div className='product-title'>Dark Souls 3 - PC</div>
          <div className='product-price'>AU$69.99</div>
          <div className='product-discount'>AU$97.49</div>
          <span className="material-symbols-outlined">add_shopping_cart</span>
        </div>

        <div className='product'>
          <img className='product-img' src='https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg'></img>
          <div className='product-title'>Sekiro: Shadows Die Twice - PC</div>
          <div className='product-price'>AU$59.99</div>
          <div className='product-discount'>AU$75.99</div>
          <span className="material-symbols-outlined">add_shopping_cart</span>
        </div>



      </div>

      
    );
  };
  
  export default Shop;
  