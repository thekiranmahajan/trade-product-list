import "../styles/shimmer.css";

const ProductCardShimmer = () => {
  return (
    <>
      {[...Array(10)].map((_, i) => (
        <div key={i}>
          <div className="shimmer-card ">
            <div className="shimmer-top"></div>

            <div className="shimmer-bottom">
              <div id="shimmer-title"></div>
              <div id="shimmer-ratings"></div>
              <div id="shimmer-description"></div>
              <div id="shimmer-category"></div>

              <div className="shimmer-price-btn">
                <div id="shimmer-price"></div>
                <div id="shimmer-btn"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCardShimmer;
