import { useCategories } from '../../hooks/category/useCategories';
import { useManageViews } from '../../hooks/useManageViews';
import { deleteCategory } from '../../services/categoryService';
import ActionButtons from '../common/action-buttons/ActionButtons';
import './CategoriesTable.css'


const CategoriesTable = () => {

    const {data,error,setRefetch,loading} = useCategories();
    const { onEditCategoryForm } = useManageViews();


    const handleDelete = async (id: number)=> {
        try{
            const response = await deleteCategory(id);
            console.log(response);
            setRefetch(true);
        } catch (err) {
            console.error(err);
        }
    };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleEdit(id: number): void {
    onEditCategoryForm(id);
  }

  return (
    <>
      <section className="cat-table-container">

        <div> {loading && <p>Loading categories...</p>}</div>
        <div> {error && <p>{error}</p>}</div>
        
        {!error && !loading && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.content.map((category) => (
                <tr key={category.id}>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td className="column-actions">
                    <ActionButtons
                      data={category}
                      handleDelete={() => handleDelete(category.id)}
                      handleEdit={() => handleEdit(category.id)}
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

export default CategoriesTable;
