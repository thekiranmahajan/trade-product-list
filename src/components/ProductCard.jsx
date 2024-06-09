import "../styles/card.css";
import star from "../assets/star.svg";

const ProductCard = ({ product }) => {
  const {
    image,
    title,
    description,
    category,
    price,
    rating: { count, rate },
  } = product;

  return (
    <div className="product-card">
      <div className="img-section">
        <img id="product-img" src={image} alt="product-image" />
      </div>
      <div className="details-section">
        <h2 id="product-title">{title}</h2>
        <div className="ratings-section">
          <img id="star" src={star} alt="star" />
          <h4 id="product-ratings">
            {count} <span>({rate})</span>
          </h4>
        </div>
        <p id="product-description">{description}</p>
        <h5 id="product-category">{category}</h5>
        <div className="price-btn-section">
          <h1 id="product-price">&#8377;{price}</h1>
          <button id="cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
