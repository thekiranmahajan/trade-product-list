import { Footer, Header, ProductCard, ProductCardShimmer } from "./components";
import useProducts from "./hooks/useProducts";

const App = () => {
  const products = useProducts();
  // console.log(products);
  return (
    <>
      <Header />
      <section>
        {products?.length > 0 ? (
          <>
            {products?.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </>
        ) : (
          <ProductCardShimmer />
        )}
      </section>
      <Footer />
    </>
  );
};

export default App;
