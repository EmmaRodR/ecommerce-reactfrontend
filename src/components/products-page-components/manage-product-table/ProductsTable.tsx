import { deleteProduct } from "../../../services/productService";
import "./ProductsTable.css";
import { useManageViews } from "../../../hooks/useManageViews";
import ActionButtons from "../../common/action-buttons/ActionButtons";
import { useProducts } from "../../../hooks/product/useProducts";

const ProductsTable = () => {

  const { data, error, loading, setRefetch } = useProducts();

  const { onEditProductForm } = useManageViews();

  const handleDelete = async (id: number) => {
    try {
      const response = await deleteProduct(id);
      console.log(response);
      setRefetch(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = async (id: number) => {
    onEditProductForm(id);
  };

  return (
    <>
      <section className="table-container">
        <div> {loading && <p>Cargando productos...</p>}</div>
        <div> {error && <p>{error}</p>}</div>
        {!error && !loading && (
          <table>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Price (USD)</th>
                <th>Product Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.content.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.categoryName}</td>
                  <td className="column-actions">
                    <ActionButtons
                      data={product}
                      handleDelete={() => handleDelete(product.id)}
                      handleEdit={() => handleEdit(product.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </>
  );
};

export default ProductsTable;
