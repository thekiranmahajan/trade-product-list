export const userQuery = (products, setFilteredProducts, searchText) => {
  const filteredData = products.filter((product) =>
    product?.title?.toLowerCase().includes(searchText.toLowerCase())
  );
  setFilteredProducts(filteredData.length === 0 ? null : filteredData);
  console.log(filteredData);
};
