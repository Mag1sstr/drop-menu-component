import { UseFormRegister } from "react-hook-form";
import InputField from "../ui/InputField";
import { TOrderForm } from "../pages/OrderPage";
import { IPropsStage } from "./ContactsStage";

interface IProps extends IPropsStage {
  isLoading: boolean;
}
function DeliveryStage({
  register,
  onSubmit,
  errors,
  isLoading,
  setStage,
}: IProps) {
  return (
    <div>
      <h2 className="mb-7 text-[20px] font-medium flex justify-between">
        Доставка{" "}
        <span
          className="ml-auto block"
          onClick={() => setStage((prev) => prev - 1)}
        >
          Назад
        </span>
      </h2>
      <div className="flex flex-col gap-4 mb-10">
        <InputField label="Область" register={register("area")} />
        <InputField label="Город или поселок" register={register("city")} />
        <InputField label="Улица" register={register("street")} />
        <InputField label="Дом" register={register("house")} />
        <InputField label="Квартира" register={register("apartment")} />
      </div>

      <button
        disabled={isLoading}
        onClick={onSubmit}
        className={`ml-auto uppercase text-(--prime) border-4 transition-all cursor-pointer ${isLoading ? "border-[#A5A5A5] bg-[#A5A5A5] text-white" : "border-(--prime) hover:bg-(--prime) hover:text-white "} text-[12px] font-bold py-3 px-5 `}
      >
        {isLoading ? "Подождите..." : "Оформить заказ"}
      </button>
    </div>
  );
}

export default DeliveryStage;
