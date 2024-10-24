export interface CategoryResponse {
    pageNumber: number;
    pageSize: number;
    numberOfElements: number;
    content: Category[];
  }

  export interface Category {
    type: 'category';
    id: number;
    name: string;
  }

  export interface CategoryRequest {
    name: string;
  }

