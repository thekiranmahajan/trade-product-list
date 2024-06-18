import { useEffect, useState } from "react";
import { FAKE_PRODUCT_API } from "../utils/constant";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async (signal) => {
    setIsLoading(true);
    try {
      const response = await fetch(FAKE_PRODUCT_API, { signal });
      const data = await response.json();
      if (!signal.aborted) {
        setProducts(data);
        setFilteredProducts(data);
        setIsLoading(false);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log("Failed to load products..Please try again later.", error);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    const { signal } = controller;

    fetchProducts(signal);
    return () => {
      controller.abort();
    };
  }, []);

  return { products, filteredProducts, setFilteredProducts, isLoading };
};

export default useProducts;
