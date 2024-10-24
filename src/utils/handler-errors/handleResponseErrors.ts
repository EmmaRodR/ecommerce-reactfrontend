
export const handleResponseErrors = async (response: Response) => {

    if (!response.ok) {
              
      switch (response.status) {
        case 400:
          throw new Error("Datos inválidos");
        case 401:
          throw new Error("Token expirado");
        case 404:
          throw new Error("Recurso no encontrado");
        case 409:
          throw new Error("Item o producto ya existente");
        case 500:
          throw new Error("Error en el servidor");
        default:
          throw new Error("Error desconocido");
      }
    }
  };
  