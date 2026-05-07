import { useId } from "react";
interface IProps {
  label?: string;
  placeholder?: string;
  type?: "email" | "text" | "number" | "password";
}
function InputField({ label, placeholder, type = "text" }: IProps) {
  const id = useId();
  return (
    <div>
      <label className="mb-2 font-medium " htmlFor={id}>
        {label}
      </label>
      <div className="flex-1">
        <input
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
