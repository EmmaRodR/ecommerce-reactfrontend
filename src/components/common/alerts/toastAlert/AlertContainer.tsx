import { useAlert } from "../../../../context/AlertContext";

interface AlertContainerProps {
    position: "top" | "bottom" | undefined;
 }
 
 
 export const AlertContainer: React.FC<AlertContainerProps> = ({position="bottom"}) => {
 
   const { alerts } = useAlert(); // Obtiene las alertas desde el contexto
   
   return (
     <div className={`alerts-container ${position}`}>
       {alerts}
     </div>
   );
 };