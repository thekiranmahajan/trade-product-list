import { Footer, Header, ProductCard } from "./components";
import useProducts from "./hooks/useProducts";

const App = () => {
  const products = useProducts();
  // console.log(products);
  return (
    <>
      <Header />
      <section>
        {products?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </section>
      <Footer />
    </>
  );
};

export default App;
