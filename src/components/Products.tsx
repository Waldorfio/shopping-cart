interface Props {
  title: string,
  price: string,
  discount: string,
  img: string,
  addToCart: any,
}

const Products = (props: Props) => {

    const { title, price, discount, img, addToCart } = props;

    return (
      <div className='product'>
        <img className='product-img' src={require('../img/'+img)}></img>
        <div className='product-title'>{title}</div>
        <div className='product-price'>{price}</div>
        <div className='product-discount'>{discount}</div>
        <span id='button-add' onClick = {() => addToCart(title, price)} className="material-symbols-outlined">add_shopping_cart</span>
      </div>
    );
  };

  
  export default Products;
  