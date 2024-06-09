import { useState } from "react";
import { userQuery } from "../utils/helper";

const SearchBar = ({ setFilteredProducts, products }) => {
  const [searchText, setSearchText] = useState("");

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      userQuery(products, setFilteredProducts, searchText);
    }
  };
  return (
    <div>
      <input
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        onKeyDown={handleEnter}
        placeholder="Search a product by Name"
        type="text"
      />
    </div>
  );
};

export default SearchBar;
