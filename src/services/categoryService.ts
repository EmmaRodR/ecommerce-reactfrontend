import { Category, CategoryRequest, CategoryResponse } from "../types/categoryType"
import { CATEGORIES_BASE_URL, LOCAL_BASE_URL } from "./api-consts";
import { authHeader } from './authHeader';
import { handleResponseErrors } from '../utils/handler-errors/handleResponseErrors';
import { BaseResponse } from "../types/productType";


export const fetchCategories = async (
    page: number,
    size: number
    ): Promise<CategoryResponse> => {

    const url = new URL(CATEGORIES_BASE_URL);
    url.searchParams.append("pageNumber", page.toString());
    url.searchParams.append("pageSize", size.toString());
    
    const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            Authorization: authHeader(),
        },
    });

    console.log(response);

    handleResponseErrors(await response);

    const data: CategoryResponse = await response.json();
    return data;
};

export const fetchCategoryById = async (id: number): Promise<Category> => {
    const url = new URL(`${LOCAL_BASE_URL}/api/v1/categories/${id}`);
  
    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader(),
      },
    });
  
    handleResponseErrors(await response);
  
    const data: Category = await response.json();
    return data;
  };
  

export const createCategory = async (categoryRequest: CategoryRequest): Promise<BaseResponse> => {
    
    const url = new URL(CATEGORIES_BASE_URL);

    const response = await fetch(url.toString(), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: authHeader(),
        },
        body: JSON.stringify(categoryRequest),
    });
    
    handleResponseErrors(await response);

    const responseData: BaseResponse = await response.json();
    return responseData;

}

export const updateCategory = async (
        id: number,
        categoryRequest: CategoryRequest
      ): Promise<BaseResponse> => {
        try {
          const url = new URL(`${LOCAL_BASE_URL}/api/v1/categories/${id}`);
      
          const response = await fetch(url.toString(), {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: authHeader(),
            },
            body: JSON.stringify(categoryRequest),
          });
      
          handleResponseErrors(await response);
      
          const responseData: BaseResponse = await response.json();
          return responseData;
        } catch (err) {
          console.error(err);
          throw err;
        }
      };
    

export const deleteCategory = async (id: number):Promise<void> => {
    
    try {
        const url = new URL(`${LOCAL_BASE_URL}/api/v1/categories/${id}`);

        const response = await fetch(url.toString(), {
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
                Authorization: authHeader(),
            },
        });

        handleResponseErrors(await response);
    } catch (err) {
        console.log("Error al eliminar la categoria:",err);
        throw err;
    }


}   