import { ProductCard } from "./components";
import useProducts from "./hooks/useProducts";

const App = () => {
  const products = useProducts();
  console.log(products);
  return (
    <div className="">
      <ProductCard />
    </div>
  );
};

export default App;
