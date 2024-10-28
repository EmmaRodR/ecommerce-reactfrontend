import { useEffect } from "react"
import { fetchProducts } from "../services/productService"


const KeepAlive = () => {

    useEffect(() => {

        const fetchKeepAlive = async () => {

            try { 
             await fetchProducts(0,50);
             console.log("server is alive")
            
            } catch (err) {
                console.log(err);
            }
        }

        fetchKeepAlive();

        // Configura el intervalo para llamar cada 15 minutos (900000 ms)
        const intervalId = setInterval(fetchKeepAlive,900000)
        
        return () => clearInterval(intervalId);


    },[]);

    return null;

};

export default KeepAlive;