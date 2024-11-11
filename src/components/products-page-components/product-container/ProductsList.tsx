import { useProducts } from "../../../hooks/product/useProducts";
import { Product } from "../../../types/productType";
import ProductCard from "./product-card/ProductCard";
import "./ProductsList.css";

interface ProductListProps {
  filter: string;
  categoryFilter: string;
}

const ProductsList: React.FC<ProductListProps> = ({
  filter,
  categoryFilter,
}) => {
  const { error, loading, data } = useProducts();


  const searchFilter = data?.content?.filter((product: Product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  ) || [];

  const categoryFiltered = searchFilter?.filter((product: Product) => {
    if (categoryFilter === "All" || categoryFilter.trim() === "") {
      return true;
    }

    return product.categoryName
      .toLowerCase()
      .includes(categoryFilter.toLowerCase());
  });


  return (
    <>
      {error && <p>{error}</p>}
      {loading ? (
        <p>Loading products...</p>
      ) : (
        categoryFiltered.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </>
  );
};


export default ProductsList;
