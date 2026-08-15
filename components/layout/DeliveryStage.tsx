import { UseFormRegister } from "react-hook-form";
import InputField from "../ui/InputField";
import { TOrderForm } from "../pages/OrderPage";
import { IPropsStage } from "./ContactsStage";

function DeliveryStage({ register, onSubmit, errors }: IPropsStage) {
  return (
    <div>
      <h2 className="mb-7 text-[20px] font-medium">Контактные данные</h2>
      <div className="flex flex-col gap-4 mb-10">
        <InputField label="Область" register={register("area")} />
        <InputField label="Город или поселок" register={register("city")} />
        <InputField label="Улица" register={register("street")} />
        <InputField label="Дом" register={register("house")} />
        <InputField label="Квартира" register={register("apartment")} />
      </div>

      <button
        onClick={onSubmit}
        className="ml-auto uppercase text-(--prime) border-4 border-(--prime) hover:bg-(--prime) hover:text-white text-[12px] font-bold py-3 px-5"
      >
        Оформить заказ
      </button>
    </div>
  );
}

export default DeliveryStage;
