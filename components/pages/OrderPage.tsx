"use client";
import { IContactsValues, IOrderBody } from "@/app/frostTypes";
import { useAuth } from "@/contexts/AuthContext";
import { useCreateOrderMutation, useGetCartQuery } from "@/store/frostApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "../ui/InputField";
import ContactsStage from "../layout/ContactsStage";
import DeliveryStage from "../layout/DeliveryStage";
import CompleteStage from "../layout/CompleteStage";

export type TOrderForm = IOrderBody & IContactsValues;

function OrderPage() {
  const [stage, setStage] = useState(0);
  const { data: cartData } = useGetCartQuery();
  const { user } = useAuth();
  const [createOrder, { data, isLoading, isSuccess }] =
    useCreateOrderMutation();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    reset,
    getValues,
    watch,
    trigger,
  } = useForm<TOrderForm>({ mode: "onChange" });

  const name = watch("name");
  const surname = watch("surname");
  const email = watch("email");
  const tel = watch("tel");
  const patronymic = watch("patronymic");
  // const contactsSuccess =
  //   !!name && !!surname && !!email && !!tel && !!patronymic;

  const submit: SubmitHandler<TOrderForm> = (data) => {
    createOrder({
      apartment: data.apartment,
      area: data.area,
      city: data.city,
      house: data.house,
      phone: data.tel,
      street: data.street,
    });
  };
  const stagesComponent = [
    <ContactsStage
      register={register}
      errors={formErrors}
      onSubmit={async () => {
        const contactsSuccess = await trigger([
          "name",
          "surname",
          "patronymic",
          "email",
          "tel",
        ]);
        if (contactsSuccess) {
          setStage(1);
        }
      }}
      setStage={setStage}
    />,
    <DeliveryStage
      register={register}
      errors={formErrors}
      isLoading={isLoading}
      onSubmit={handleSubmit(submit)}
      setStage={setStage}
    />,
    <CompleteStage orderNum={data} />,
  ];

  useEffect(() => {
    if (user) {
      reset({
        name: user.firstName,
        surname: user.lastName,
        email: user.email,
      });
    }
  }, [user]);

  useEffect(() => {
    if (isSuccess) {
      setStage(2);
    }
  }, [isSuccess]);

  console.log("Заказ № - " + data);

  return (
    <section className="p-22">
      <div className="container">
        <h1 className="text-[36px] font-bold mb-12 ">ОФОРМЛЕНИЕ ЗАКАЗА</h1>

        <div className="flex gap-29.5 items-start">
          <div className="flex-1">{stagesComponent[stage]}</div>
          {stage !== 2 && (
            <div className="w-114 border-4 border-[#A5A5A5]">
              <div className="bg-(--text) text-white flex items-center justify-between p-6">
                <p className="text-[20px]">Ваш заказ</p>
                <button
                  onClick={() => router.push("/cart")}
                  className="border-4 border-white uppercase px-5 py-3 font-bold text-[12px] leading-2 transition-all cursor-pointer hover:bg-white hover:text-black "
                >
                  ИЗМЕНИТЬ
                </button>
              </div>
              {cartData?.items.map(({ count, product }) => (
                <div
                  key={product.id}
                  className="bg-white not-last:border-b border-[#A5A5A5] py-4 px-5 flex items-end justify-between"
                >
                  <div className="flex flex-col flex-1 gap-2">
                    <p className="text-(--prime) leading-4">{product.name}</p>
                    <p className="text-[#A5A5A5] leading-3">
                      {count} шт. х {product.price} тг.
                    </p>
                  </div>
                  <p className="font-medium">{count * product.price} тг.</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default OrderPage;
