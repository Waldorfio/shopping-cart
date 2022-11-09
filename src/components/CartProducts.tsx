interface Props {
    title: string,
    price: string,
  }
  
  const CartProducts = (props: Props) => {
  
      const { title, price } = props;
  
      return (
        <div className='product-forcart'>
          <div className='product-carttitle'>{title}</div>
          <div className='product-cartprice'>{price}</div>
        </div>
      );
    };
    
    export default CartProducts;
    