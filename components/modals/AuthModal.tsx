import { createPortal } from "react-dom";
import { FormEvent, useEffect, useState } from "react";
import { useCreateUserMutation, useLoginUserMutation } from "@/store/api";
import { useAppDispatch } from "@/store/store";
import { setToken } from "@/store/authSlice";
import InputField from "../ui/InputField";
import { SubmitHandler, useForm } from "react-hook-form";
interface IProps {
  open: boolean;
  setOpen: (b: boolean) => void;
}

export interface IReg {
  name: string;
  email: string;
  password: string;
  avatar: string;
}
interface ILogin {
  email: string;
  password: string;
}
function AuthModal({ setOpen, open }: IProps) {
  const [isLogin, setIsLogin] = useState(true);
  const {
    register: registerReg,
    handleSubmit: handleReg,
    formState: { errors: regErrors },
  } = useForm<IReg>();
  const {
    register: registerLogin,
    handleSubmit: handleLogin,
    formState: { errors: loginErrors },
  } = useForm<ILogin>();

  const dispatch = useAppDispatch();
  const [loginUser, { isSuccess: isLoginSuccess, data: loginData }] =
    useLoginUserMutation();

  const [createUser, { data }] = useCreateUserMutation();

  const submitReg: SubmitHandler<IReg> = (data) => {
    createUser({ ...data, avatar: "https://picsum.photos/800" });
  };
  const submitLogin: SubmitHandler<ILogin> = (data) => {
    loginUser(data);
  };

  useEffect(() => {
    if (isLoginSuccess && loginData.access_token) {
      dispatch(setToken(loginData.access_token));
      setOpen(false);
    }
  }, [isLoginSuccess]);

  console.log(data);

  return createPortal(
    <div
      onMouseDown={() => setOpen(false)}
      className={`fixed z-50 inset-0 bg-black/70 flex items-center justify-center transition-all ${open ? "visible opacity-100 mt-0" : "invisible opacity-0 mt-5"}`}
    >
      <div
        onMouseDown={(e) => e.stopPropagation()}
        className="w-[500px] border-t-4 border-(--prime)"
      >
        <div className="bg-[#1D1D1D] pt-5 flex gap-8 pr-5">
          <div className="w-25 h-24 bg-[#C53720]"></div>
          <div className="text-white mt-2.5">
            <p className="font-bold uppercase text-[24px]">
              {isLogin ? "логин" : "регистрация"}
            </p>
            <p className="text-[12px] font-medium">
              Представьтесь, мы вам перезвоним.
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="ml-auto cursor-pointer self-start"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4L16 16" stroke="white" strokeWidth="4" />
              <path d="M16 4L4 16" stroke="white" strokeWidth="4" />
            </svg>
          </button>
        </div>
        {isLogin ? (
          <form
            onSubmit={handleLogin(submitLogin)}
            className="bg-white p-5 flex flex-col"
          >
            <div className="flex flex-col gap-4">
              <InputField
                register={registerLogin("email", {
                  required: "Поле обязательное для заполнения",
                })}
                label="Почта"
                type="email"
                isError={loginErrors.email?.message}
              />
              <InputField
                register={registerLogin("password", {
                  required: "Поле обязательное для заполнения",
                })}
                label="Пароль "
                type="password"
                isError={loginErrors.password?.message}
              />
            </div>
            <div className="flex items-center justify-between">
              <p
                className="text-(--prime) font-medium cursor-pointer"
                onClick={() => setIsLogin(false)}
              >
                Нет аккаунта?
              </p>
              <button className="uppercase text-[12px] font-bold text-[#C53720] py-3 px-5 border-4 transition-all cursor-pointer border-[#C53720] leading-2 ml-auto mt-4 hover:bg-[#C53720] hover:text-white">
                Login
              </button>
            </div>
          </form>
        ) : (
          <form
            className="bg-white p-5 flex flex-col"
            onSubmit={handleReg(submitReg)}
          >
            <InputField
              register={registerReg("name", {
                required: "Поле обязательное для заполнения",
              })}
              label="Ваше имя"
              type="text"
              isError={regErrors.name?.message}
            />
            <InputField
              register={registerReg("email", {
                required: "Поле обязательное для заполнения",
              })}
              label="Почта"
              type="email"
              isError={regErrors.email?.message}
            />
            <InputField
              register={registerReg("password", {
                required: "Поле обязательное для заполнения",
              })}
              label="Пароль"
              type="password"
              isError={regErrors.password?.message}
            />
            <div className="flex items-center justify-between">
              <p
                className="text-(--prime) font-medium cursor-pointer"
                onClick={() => setIsLogin(true)}
              >
                Есть аккаунт?
              </p>
              <button className="uppercase text-[12px] font-bold text-[#C53720] py-3 px-5 border-4 transition-all cursor-pointer border-[#C53720] leading-2 ml-auto mt-4 hover:bg-[#C53720] hover:text-white">
                Register
              </button>
            </div>
          </form>
        )}
      </div>
    </div>,
    document.body,
  );
}

export default AuthModal;
