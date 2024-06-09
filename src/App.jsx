import { Footer, Header, ProductCard, SearchBar } from "./components";
import useProducts from "./hooks/useProducts";
import { ProductCardShimmer } from "./shimmers";
import notFound from "./assets/not-found.svg";

const App = () => {
  const { products, filteredProducts, setFilteredProducts } = useProducts();
  return (
    <>
      <Header />
      <SearchBar
        setFilteredProducts={setFilteredProducts}
        products={products}
      />
      <section>
        {products?.length === 0 ? (
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

      <Footer />
    </>
  );
};

export default App;
