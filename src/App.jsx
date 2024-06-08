import useProducts from "./hooks/useProducts";

const App = () => {
  const products = useProducts();
  return <div>App</div>;
};

export default App;
