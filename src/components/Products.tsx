const Products = (props: object) => {
    // State Declarations

    // State Handlers
    const img = props.game;
    return (
      <div className='product'>
        <img className='product-img' src={img}></img>
        <div className='product-title'>Elden Ring DELUXE EDITION - PC</div>
        <div className='product-price'>AU$73.09</div>
        <div className='product-discount'>AU$97.49</div>
        <span className="material-symbols-outlined">add_shopping_cart</span>
      </div>
    );
  };
  
  export default Products;
  