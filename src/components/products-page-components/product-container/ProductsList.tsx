import { useProducts } from "../../../hooks/product/useProducts";
import ProductCard from "./product-card/ProductCard";
import "./ProductsList.css";

const ProductsList = () => {
  const { data, error, loading } = useProducts();

  return (
    <>
      {data?.content.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {loading && <p>Cargando productos...</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default ProductsList;
