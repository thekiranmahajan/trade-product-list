import { useEffect, useState } from "react";
import { FAKE_PRODUCT_API } from "../utils/constant";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(FAKE_PRODUCT_API);
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    };
    fetchProducts();
  }, []);

  return { products, filteredProducts, setFilteredProducts };
};

export default useProducts;
