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


  const searchFilter = data?.content.filter((product: Product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  const categoryFiltered = searchFilter?.filter((product: Product) =>
    product.categoryName.toLowerCase().includes(categoryFilter.toLowerCase())
  );


  const handleFiltered = () => {
    if (categoryFilter === "All" || categoryFilter === " ") {
      return searchFilter; //
    }
    return categoryFiltered; //
  };

  return (
    <>
      {handleFiltered() ? (handleFiltered() &&
        handleFiltered()?.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        )))

       : error && <p>{error}</p>}

       {loading && <p>Loading products...</p>}
    </>
  );
};

export default ProductsList;
