import { useId } from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
interface IProps {
  label?: string;
  placeholder?: string;
  type?: "email" | "text" | "number" | "password";
  value?: string | number;
  onChange?: (v: number | string) => void;
  register?: UseFormRegisterReturn;
  isError?: string;
}
function InputField({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  register,
  isError,
}: IProps) {
  const id = useId();
  return (
    <div>
      <label className="mb-2 font-medium " htmlFor={id}>
        {label}
      </label>
      <div className="flex-1 relative">
        <input
          {...register}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          className={`w-full border-4  py-1 px-3 outline-none transition-all ${!!isError ? "border-[#FF2400]" : "border-[#1D1D1D]"}`}
          type={type}
          id={id}
          placeholder={placeholder}
        />
      </div>
      {!!isError && (
        <p className="text-end mt-2 text-[10px] font-medium text-[#FF2400]">
          {isError}
        </p>
      )}
    </div>
  );
}

export default InputField;
