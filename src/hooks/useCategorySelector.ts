import { useState } from "react";

export function useCategorySelector () {

    const [selectedOption,setSelectedOption] = useState("");

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedOption(event.target.value); // Actualiza el valor en el padre
    };

    return {handleCategoryChange,selectedOption,setSelectedOption}

}