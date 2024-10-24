import { useEffect, useState } from "react";
import { useCategories } from "../../hooks/category/useCategories";
import { Category } from "../../types/categoryType";


interface SelectInputProps {
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLSelectElement>
}

const SelectInput: React.FC<SelectInputProps> = ({value,onChange}) => {

  const { data } = useCategories();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const setData = () => {
      try {
        if (data) {
        setCategories(data?.content);
        }
      } catch (error) {
        console.log(error);
      }
    };

    setData();

  }, [data]);

  return (
    <>
    <label className="input-label">Category</label>
    <select name="categoryName" id="selCategories" value={value} onChange={onChange}>
      <option value={-1}>Select a category</option>
      {categories &&
        categories.map((item, i) => (
          <option key={"category" + i} value={item.name}> 
            {item.name}
          </option>
        ))}
    </select>
    </>
  );
};

export default SelectInput;
