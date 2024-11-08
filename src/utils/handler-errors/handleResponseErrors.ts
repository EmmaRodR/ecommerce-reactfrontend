
export const handleResponseErrors = async (response: Response) => {

    if (!response.ok) {
              
      switch (response.status) {
        case 400:
          throw new Error("Invalid data");
        case 401:
          throw new Error("Token expired");
        case 404:
          throw new Error("Resource not found");
        case 409:
          throw new Error("Product or item already exists");
        case 500:
          throw new Error("Server error");
        default:
          throw new Error("Unknown error");
      }
    }
  };
  