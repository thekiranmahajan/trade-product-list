import React from "react";
import notFound from "../assets/not-found.svg";
import { ProductCard, SearchBar } from "../components";
import { ProductCardShimmer } from "../shimmers";
import useProducts from "../hooks/useProducts";

const ProductPage = () => {
  const { products, filteredProducts, setFilteredProducts, isLoading } =
    useProducts();
  return (
    <>
      <SearchBar
        setFilteredProducts={setFilteredProducts}
        products={products}
      />
      <section>
        {products?.length === 0 && isLoading ? (
          <ProductCardShimmer />
        ) : filteredProducts === null ? (
          <div className="no-results">
            <img src={notFound} alt="not-found" />
            No products found with your search....
          </div>
        ) : (
          <>
            {filteredProducts?.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </>
        )}
      </section>
    </>
  );
};

export default ProductPage;
