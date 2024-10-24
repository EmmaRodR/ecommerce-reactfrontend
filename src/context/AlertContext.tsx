import { createContext, useContext, useState } from "react";
import Alert from "../components/common/alerts/toastAlert/Alert";

type Toast = {
    text: string;
    variant?: "success" | "danger" | "warning";
}

type AlertContextType = {
    createToast: (options: Toast) => void;
    alerts: JSX.Element;
}

interface AlertProviderProps {
    children: React.ReactNode;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider: React.FC<AlertProviderProps> = ({children}) => {

    const [list,setAlerts] = useState<Toast[]>([]);

    const createToast = (options: Toast): void => {
        setAlerts((list) => [...list, options]);

        setTimeout(() => {
          setAlerts((t) => t.slice(1));
          
        }, 1500);
      };
 
      const alerts = (
        <div>
            {list.map((t) => (
            <Alert variant={t.variant}>
              {t.text}  
            </Alert>
          ))}
        </div>
      );


    return (
        <AlertContext.Provider value={{ createToast, alerts }}>
            {children}
        </AlertContext.Provider>
    );



}

export const useAlert = () => {
    const context = useContext(AlertContext);
  
    if (context === undefined) {
      throw new Error('useAlert must be used within an AlertProvider');
    }
    return context;
  };
