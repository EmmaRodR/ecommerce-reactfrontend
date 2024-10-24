import { useContext } from "react";
import { PagesEnum } from "../types/pagesEnum";
import { ShowTableContext } from "../context/ShowTableContext";

export function useManageViews() {

  const showTableContext = useContext(ShowTableContext);
  const showTableState = showTableContext.showTable;

  const onAddProductForm = () => {
    showTableContext.setShowTable(PagesEnum.addProduct);
  };

  const onAddCategoryForm = () => {
    showTableContext.setShowTable(PagesEnum.addCategory);
  };

  const onEditProductForm = (id: number) => {
    showTableContext.setShowTable(PagesEnum.editProduct);
    showTableContext.setItemId(id);
  };

  const onEditCategoryForm = (id: number) => {
    showTableContext.setShowTable(PagesEnum.editCategory);
    showTableContext.setItemId(id);
  };

  const getBackToProductTable = () => {
    showTableContext.setShowTable(PagesEnum.productTable);
  };

  const getBackToCategoryTable = () => {
    console.log(showTableContext)
    showTableContext.setShowTable(PagesEnum.categoryTable);
  };

  return {
    showTableState,
    onAddProductForm,
    onAddCategoryForm,
    onEditProductForm,
    onEditCategoryForm,
    getBackToProductTable,
    getBackToCategoryTable
  };
}
