import "./Container.css";
import { useManageViews } from "../../../hooks/useManageViews";
import { PagesEnum } from "../../../types/pagesEnum";
import ProductsTable from "../../products-page-components/manage-product-table/ProductsTable";
import AddProductForm from "../../products-page-components/forms/addProductForm/AddProductForm";
import EditProductForm from "../../products-page-components/forms/editProductForm/EditProductForm";
import ProductsContainer from "../../products-page-components/product-container/ProductsList";
import CategoriesTable from "../../categories-page-components/CategoriesTable";
import ContainersButtons from "./container-buttons/ContainersButtons";
import AddCategoryForm from "../../categories-page-components/addCategoryForm/AddCategoryForm";
import EditCategoryForm from "../../categories-page-components/editCategoryForm/EditCategoryForm";

const Container = () => {
  const {
    showTableState,
    onAddProductForm,
    onAddCategoryForm,
    getBackToProductTable,
    getBackToCategoryTable,
  } = useManageViews();


  const renderButtons = () => {
    if (
      showTableState === PagesEnum.categoryTable ||
      showTableState === PagesEnum.addCategory ||
      showTableState === PagesEnum.editCategory
    ) {
      return (
        <ContainersButtons
          type="Category"
          onAddElement={onAddCategoryForm}
          getBackToProductTable={getBackToCategoryTable}
        />
      );
    }

    if (
      showTableState === PagesEnum.productTable ||
      showTableState === PagesEnum.addProduct ||
      showTableState === PagesEnum.editProduct
    ) {
      return (
        <ContainersButtons
          type="Product"
          onAddElement={onAddProductForm}
          getBackToProductTable={getBackToProductTable}
        />
      );
    } else {
      <div></div>;
    }
  };

  const noBackgroundStates = [
    PagesEnum.addProduct,
    PagesEnum.editProduct,
    PagesEnum.editCategory,
    PagesEnum.addCategory,
  ];

  //Este mapeo se hace para facilitar la detecccio de que componenete debe cargarse dependiendo del PageEnum indicado.
  const formComponents: { [key in PagesEnum]?: JSX.Element } = {
    [PagesEnum.addProduct]: <AddProductForm />,
    [PagesEnum.editProduct]: <EditProductForm />,
    [PagesEnum.addCategory]: <AddCategoryForm />,
    [PagesEnum.editCategory]: <EditCategoryForm />,
    [PagesEnum.products]: <ProductsContainer />,
    [PagesEnum.productTable]: <ProductsTable />,
    [PagesEnum.categoryTable]: <CategoriesTable />,
  };

  return (
    <>
      <div
        className={
          showTableState === PagesEnum.productTable
            ? "action-buttons"
            : "button-inform"
        }
      >
        {renderButtons()}
      </div>
      <div
        //Si el showTableState esta incluido dentro del grupo de noBackgroundStates renderiza el className : "no background"
        className={
          showTableState && noBackgroundStates.includes(showTableState)
            ? "noBackground"
            : "display-container"
        }
      >
        {showTableState && formComponents[showTableState]
          ? 
        //De la misma manera se renderiza el compontente que esta presente dependiendo del showTableState usando el mapeo anterior.

            formComponents[showTableState]
          : formComponents[0]}
      </div>
    </>
  );
};

export default Container;
