import { createContext, useState } from "react";
import { PagesEnum } from "../types/pagesEnum";

type ShowTableContextType = {
        showTable: PagesEnum | null;
        setShowTable: (showTable: PagesEnum | null) => void;
        itemId: number | null;
        setItemId: (id: number | null) => void;
}

type ShowTableContextProviderType = {
    children: React.ReactNode;
}

export const ShowTableContext = createContext({} as ShowTableContextType);

export const ShowTableContextProvider = ({ children }: ShowTableContextProviderType) => {

    const [showTable,setShowTable] = useState<PagesEnum | null>(null);
    const [itemId,setItemId] = useState<number | null>(null);

    
  return <ShowTableContext.Provider value={{showTable,setShowTable,itemId,setItemId}}>{children}</ShowTableContext.Provider>;
};