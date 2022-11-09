interface Props {
    title: string,
    price: string,
  }
  
  const CartProducts = (props: Props) => {
  
      const { title, price } = props;
  
      return (
        <div className='product-forcart'>
          <div className='product-title'>{title}</div>
          <div className='product-price'>{price}</div>
        </div>
      );
    };
    
    export default CartProducts;
    