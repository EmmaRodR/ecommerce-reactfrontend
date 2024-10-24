import { useEffect, useState } from "react";
import { ProductResponse } from "../../types/productType";
import { fetchProducts } from "../../services/productService";

export function useProducts() {
  const [data, setData] = useState<ProductResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [refetch, setRefetch] = useState(false);

  const [page] = useState(0);
  const [size] = useState(50);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await fetchProducts(page, size);
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
  }, [page, size, refetch]);

  return { data, error, setData, loading, setRefetch };
}
