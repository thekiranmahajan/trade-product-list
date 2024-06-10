export const userQuery = (products, setFilteredProducts, searchText) => {
  const filteredData = products.filter((product) =>
    product?.title?.toLowerCase().includes(searchText.toLowerCase())
  );
  setFilteredProducts(filteredData.length === 0 ? null : filteredData);
};

export const priceSort = (products, setFilteredProducts) => {
  const sortedData = [...products].sort((a, b) => a.price - b.price);
  setFilteredProducts(sortedData);
};
export const ratingSort = (products, setFilteredProducts) => {
  const sortedData = [...products].sort(
    (a, b) => b.rating.rate - a.rating.rate
  );
  setFilteredProducts(sortedData);
};
export const nameSort = (products, setFilteredProducts) => {
  const sortedData = [...products].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  setFilteredProducts(sortedData);
};
