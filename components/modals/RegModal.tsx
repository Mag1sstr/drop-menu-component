"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import ModalWrapper from "./ModalWrapper";
import { IRegError, IRegisterBody } from "@/app/frostTypes";
import { useRef, useState } from "react";
import { useGetTokenMutation, useRegisterUserMutation } from "@/store/frostApi";
import { toast } from "react-toastify";
interface IProps {
  open: boolean;
  setOpen: (b: boolean) => void;
  setOpenLogin: (b: boolean) => void;
}

function RegModal({ open, setOpen, setOpenLogin }: IProps) {
  const passRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const { handleSubmit, register } = useForm<IRegisterBody>();
  const [registerUser, { data, isLoading, isError }] =
    useRegisterUserMutation();
  const [getToken] = useGetTokenMutation();
  const submit: SubmitHandler<IRegisterBody> = (data) => {
    registerUser(data)
      .unwrap()
      .then(() => {
        toast.success("Вы зарегистрировались! Войдите в свой аккаунт.");
        setOpen(false);
        setOpenLogin(true);
      })
      .catch((err) => {
        const error = err as IRegError;
        setErrors(Object.values(error.data.errors).flat());
      });
  };
  return (
    <ModalWrapper open={open} setOpen={setOpen}>
      <form onSubmit={handleSubmit(submit)} className="w-125">
        <div className="border-t-4 border-(--prime) bg-[#1D1D1D] flex gap-8 pt-5 text-white">
          <div className="w-25 h-24 bg-(--prime) p-4 mask-[url('/box.svg')]"></div>
          <div className="flex flex-col gap-2">
            <p className="uppercase text-[24px] font-bold">обратный звонок</p>
            <p></p>
          </div>
        </div>
        <div className="bg-white py-6 px-10">
          {errors.length > 0 &&
            errors.map((err) => (
              <p className="text-[14px] text-(--prime)">{err}</p>
            ))}
          <div className="flex flex-col gap-2">
            <label htmlFor="field">Имя:</label>
            <input
              {...register("first_name", { required: "Обязательное поле!" })}
              type="text"
              className="w-full border-4 border-[#1D1D1D] bg-white py-1 px-2 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="field">Фамилия:</label>
            <input
              {...register("last_name", { required: "Обязательное поле!" })}
              type="text"
              className="w-full border-4 border-[#1D1D1D] bg-white py-1 px-2 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="field">E-mail:</label>
            <input
              {...register("email", { required: "Обязательное поле!" })}
              type="email"
              className="w-full border-4 border-[#1D1D1D] bg-white py-1 px-2 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="field">Пароль:</label>
            <input
              {...register("password", {
                required: "Обязательное поле!",
              })}
              type="text"
              className="w-full border-4 border-[#1D1D1D] bg-white py-1 px-2 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="field">Повторите пароль:</label>
            <input
              ref={passRef}
              type="text"
              className="w-full border-4 border-[#1D1D1D] bg-white py-1 px-2 outline-none"
            />
          </div>
          <button
            className={`p-3 bg-(--prime) text-[12px] text-white transition-all ${isLoading && "opacity-50"}`}
          >
            Reg
          </button>
        </div>
      </form>
    </ModalWrapper>
  );
}

export default RegModal;
