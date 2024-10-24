import { createContext, useContext, useEffect, useState } from "react";


type ThemeContextType = {
    theme: "light" | "dark" | undefined;
    setTheme: (theme: "light" | "dark") => void;
}

type ThemeContextProviderType = {
    children: React.ReactNode;
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
        if(!context) {
            throw new Error('useTheme must used inside a ThemeProvider');
        }
        return context;
}

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeContextProvider = ({children}: ThemeContextProviderType) => {

    const [theme,setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        document.body.className = theme === "light" ? "light" : "dark";
        console.log(document.body.className);
    }, [theme]);

    return <ThemeContext.Provider value={{theme,setTheme}}>{children}</ThemeContext.Provider>


}

