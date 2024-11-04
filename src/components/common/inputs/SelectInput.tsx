import { useEffect, useState } from "react";
import { useCategories } from "../../../hooks/category/useCategories";
import { Category } from "../../../types/categoryType";
import "./SelectInput.css";

interface SelectInputProps {
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  label: string | undefined;
  className: string | undefined;
}

const SelectInput: React.FC<SelectInputProps> = ({
  value,
  onChange,
  label = undefined,
  className = undefined,
}) => {
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
      <label className="input-label" htmlFor="">
        {label}
      </label>
      <select
        className={className}
        name="categoryName"
        id="selCategories"
        value={value}
        onChange={onChange}
      >
        <option value="All">All</option>
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
