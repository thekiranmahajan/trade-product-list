export const userQuery = (products, setFilteredProducts, searchText) => {
  const filteredData = products.filter((product) =>
    product?.title?.toLowerCase().includes(searchText.toLowerCase())
  );
  setFilteredProducts(filteredData.length === 0 ? null : filteredData);
  console.log(filteredData);
};

export const priceSort = (products, setFilteredProducts) => {
  const sortedData = products.sort((a, b) => a.price - b.price);
  setFilteredProducts(sortedData);
  console.log(sortedData);
};
export const ratingSort = (products, setFilteredProducts) => {
  const sortedData = products.sort((a, b) => a.rating.rate - b.rating.rate);
  setFilteredProducts(sortedData);
  console.log(sortedData);
};
export const nameSort = (products, setFilteredProducts) => {
  const sortedData = products.sort((a, b) =>
    a.name.localCompare(b.rating.rate)
  );
  setFilteredProducts(sortedData);
  console.log(sortedData);
};
