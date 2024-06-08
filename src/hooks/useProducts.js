import { useEffect, useState } from "react";
import { FAKE_PRODUCT_API } from "../utils/constant";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(FAKE_PRODUCT_API);
      const data = await response.json();
      // console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return products;
};

export default useProducts;
