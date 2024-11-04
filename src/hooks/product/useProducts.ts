import { useEffect, useState } from "react";
import { ProductResponse } from "../../types/productType";
import { fetchProducts } from "../../services/productService";

export function useProducts() {
  const [data, setData] = useState<ProductResponse | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await fetchProducts(0, 50);
        setData(result);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Error al cargar los productos");
      } finally {
        setLoading(false);
        setRefetch(false);
      }
    };
    fetchData();
  }, [refetch]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return {
    data,
    error,
    setData,
    loading,
    searchTerm,
    setRefetch,
    setSearchTerm,
    searchHandler,
  };
}
