import { useId } from "react";
interface IProps {
  label?: string;
  placeholder?: string;
  type?: "email" | "text" | "number" | "password";
  value?: string | number;
  onChange?: (v: number | string) => void;
}
function InputField({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: IProps) {
  const id = useId();
  return (
    <div>
      <label className="mb-2 font-medium " htmlFor={id}>
        {label}
      </label>
      <div className="flex-1">
        <input
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          className="w-full border-4 border-[#1D1D1D] py-1 px-3 outline-none"
          type={type}
          id={id}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default InputField;
