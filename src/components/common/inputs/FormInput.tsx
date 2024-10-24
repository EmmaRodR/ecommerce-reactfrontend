
interface FormInputProps {
  id: string,
  name: string;
  type: string;
  pattern?: string;
  placeholder: string,
  label: string,
  required?: boolean;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
}

const FormInput: React.FC<FormInputProps> = ({id,value,label, pattern, placeholder, type,onChange,onBlur, name, required = true }) => {
 

  return (
    <>
      <label className="input-label" htmlFor={name}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        value= {value || ""}
        pattern= {pattern}
       
      />
    </>
  );
};

export default FormInput;