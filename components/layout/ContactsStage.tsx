import { FieldErrors, UseFormRegister } from "react-hook-form";
import InputField from "../ui/InputField";
import { TOrderForm } from "../pages/OrderPage";
export interface IPropsStage {
  register: UseFormRegister<TOrderForm>;
  onSubmit?: () => void;
  errors?: FieldErrors<TOrderForm>;
  setStage: (fn: (prev: number) => number) => void;
}
function ContactsStage({ register, onSubmit, errors, setStage }: IPropsStage) {
  return (
    <div>
      <h2 className="mb-7 text-[20px] font-medium flex justify-between">
        Контактные данные{" "}
        <span
          className="relative group ml-auto text-(--prime) text-[14px]"
          onClick={() => setStage((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          Назад
          <div className="absolute  top-5   right-0">
            <div className="relative h-0.5 w-3 opacity-0 group-hover:w-10 group-hover:opacity-1 bg-(--prime)">
              <div className="absolute h-0.5 w-3 bg-(--prime) -left-px bottom-1 -rotate-45"></div>
              <div className="absolute h-0.5 w-3 bg-(--prime) -left-px top-1 rotate-45"></div>
            </div>
          </div>
        </span>
      </h2>
      <div className="flex flex-col gap-4 mb-10">
        <InputField label="Фамилия" register={register("surname")} />
        <InputField label="Имя" register={register("name")} />
        <InputField label="Отчество" register={register("patronymic")} />
        <InputField label="Телефон" register={register("tel")} />
        <InputField label="E-mail" register={register("email")} />
      </div>

      <button
        onClick={onSubmit}
        className="ml-auto uppercase text-(--prime) border-4 border-(--prime) hover:bg-(--prime) hover:text-white text-[12px] font-bold py-3 px-5"
      >
        Подтвердить
      </button>
    </div>
  );
}

export default ContactsStage;
