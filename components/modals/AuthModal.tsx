import { SubmitHandler, useForm } from "react-hook-form";
import ModalWrapper from "./ModalWrapper";
import { useGetTokenMutation } from "@/store/frostApi";
import { useEffect } from "react";
import { ILoginBody } from "@/app/frostTypes";
interface IProps {
  open: boolean;
  setOpen: (b: boolean) => void;
}
interface ILoginBod {
  email: string;
  password: string;
}
function AuthModal({ open, setOpen }: IProps) {
  const { handleSubmit, register } = useForm<ILoginBody>();
  const [getToken, { data, isSuccess, isError, isLoading }] =
    useGetTokenMutation();
  const login: SubmitHandler<ILoginBody> = (data) => {
    getToken({ ...data, username: data.username });
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("t", data.access_token);
    }
  }, [isSuccess]);

  console.log(data);

  return (
    <ModalWrapper open={open} setOpen={setOpen}>
      <form onSubmit={handleSubmit(login)} className="w-125" action="">
        <div className="border-t-4 border-(--prime) bg-[#1D1D1D] flex gap-8 pt-5 text-white">
          <div className="w-25 h-24 bg-(--prime) p-4 mask-[url('/box.svg')]"></div>
          <div className="flex flex-col gap-2">
            <p className="uppercase text-[24px] font-bold">обратный звонок</p>
            <p></p>
          </div>
        </div>
        <div className="bg-white py-6 px-10">
          <div className="flex flex-col gap-2">
            <label htmlFor="field">E-mail:</label>
            <input
              {...register("username", { required: "Обязательное поле!" })}
              type="text"
              className="w-full border-4 border-[#1D1D1D] bg-white py-1 px-2 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="field">Password:</label>
            <input
              {...register("password", {
                required: "Обязательное поле!",
              })}
              type="text"
              className="w-full border-4 border-[#1D1D1D] bg-white py-1 px-2 outline-none"
            />
          </div>

          <button
            className={`p-3 bg-(--prime) text-[12px] text-white transition-all ${isLoading && "opacity-50"}`}
          >
            Login
          </button>
        </div>
      </form>
    </ModalWrapper>
  );
}

export default AuthModal;
