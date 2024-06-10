import { useEffect, useState } from "react";
import { FAKE_PRODUCT_API } from "../utils/constant";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(FAKE_PRODUCT_API);
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.log("Failed to load products..Please try again later.", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, filteredProducts, setFilteredProducts, isLoading };
};

export default useProducts;
