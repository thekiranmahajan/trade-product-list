import star from "../assets/star.svg";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="img-section">
        <img
          id="product-img"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="product"
        />
      </div>
      <div className="details-section">
        <h2 id="product-title">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h2>
        <div className="ratings-section">
          <img id="star" src={star} alt="star" />
          <h4 id="product-ratings">
            4 <span>(129)</span>
          </h4>
        </div>
        <p id="product-description">
          our perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <h5 id="product-category">men clothing</h5>
        <div className="price-btn-section">
          <h1 id="product-price">179Rs</h1>
          <button id="cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
