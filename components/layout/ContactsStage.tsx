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
        <InputField
          label="Фамилия"
          isError={errors?.surname?.message}
          register={register("surname", {
            required: "Обязательное поле",
          })}
        />
        <InputField
          label="Имя"
          isError={errors?.name?.message}
          register={register("name", {
            required: "Обязательное поле",
          })}
        />
        <InputField
          label="Отчество"
          isError={errors?.patronymic?.message}
          register={register("patronymic", {
            required: "Обязательное поле",
          })}
        />
        <InputField
          label="Телефон"
          isError={errors?.tel?.message}
          register={register("tel", {
            required: "Обязательное поле",
            pattern: {
              value:
                /^(\+?(7|375|992|993|994|996|998|373|374))\s?\(?\d{3}\)?\s?\d{3}[-]?\d{2}[-]?\d{2}$/,
              message: "Неверный формат",
            },
          })}
        />
        <InputField
          label="E-mail"
          type="email"
          isError={errors?.email?.message}
          register={register("email", {
            required: "Обязательное поле",
          })}
        />
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
