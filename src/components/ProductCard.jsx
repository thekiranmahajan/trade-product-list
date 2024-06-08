const ProductCard = () => {
  return (
    <div className="product-card">
      <img
        id="product-img"
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="product"
      />
      <div>
        <h2 id="product-title">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h2>
        <h4 id="product-ratings">
          *4 <span>(129)</span>
        </h4>
        <p id="product-description">
          our perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <h5 id="product-category">men clothing</h5>
        <div id="price-btn-section">
          <h1 id="product-price">179Rs</h1>
          <button id="cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
