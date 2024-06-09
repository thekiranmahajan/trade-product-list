import { useEffect, useState } from "react";
import { nameSort, priceSort, ratingSort, userQuery } from "../utils/helper";
import "../styles/search.css";
const SearchBar = ({ setFilteredProducts, products }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    userQuery(products, setFilteredProducts, searchText);
  }, [searchText]);

  const handlePriceSort = () => {
    priceSort(products, setFilteredProducts);
  };
  const handleRatingSort = () => {
    ratingSort(products, setFilteredProducts);
  };
  const handleNameSort = () => {
    nameSort(products, setFilteredProducts);
  };
  return (
    <div className="search-container">
      <input
        className="search-bar"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        placeholder="Search a product by Name"
        type="text"
      />
      <div className="sort-container">
        <button onClick={handlePriceSort}>Price Sort</button>
        <button onClick={handleRatingSort}>rating Sort</button>
        <button onClick={handleNameSort}>name Sort</button>
      </div>
    </div>
  );
};

export default SearchBar;
