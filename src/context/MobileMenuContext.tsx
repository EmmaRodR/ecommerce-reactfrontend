import { createContext, useContext, useState } from "react";


interface MobileMenuContextProps {
    isMenuOpen: boolean;
    toogleMenu: () => void;
    closeMenu: () => void;
}

interface MobileMenuProviderProps {
    children: React.ReactNode;
}

const MobileMenuContext = createContext<MobileMenuContextProps | undefined>(undefined);

export const useMenu = () => {
    const context = useContext(MobileMenuContext);
    if (!context) {
      throw new Error("useMenu debe ser usado dentro de un MenuProvider");
    }
    return context;
  };


  export const MobileMenuProvider: React.FC<MobileMenuProviderProps> = ({children}) => {

            const [isMenuOpen,setIsMenuOpen] = useState<boolean>(false);

            const toogleMenu = () => {
                setIsMenuOpen(!isMenuOpen);
            }

            const closeMenu = () => {
                setIsMenuOpen(false);
            }


            return (
                <MobileMenuContext.Provider value={{isMenuOpen,toogleMenu,closeMenu}}>
                    {children}
                </MobileMenuContext.Provider>
            );
  }