import { createPortal } from "react-dom";
import { FormEvent, useEffect, useState } from "react";
import { useLoginUserMutation } from "@/store/api";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setToken } from "@/store/authSlice";
import InputField from "../ui/InputField";
interface IProps {
  setOpen: (b: boolean) => void;
}
function AuthModal({ setOpen }: IProps) {
  const [form, setForm] = useState({
    email: "john@mail.com",
    password: "",
  });

  const { email, password } = form;

  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);
  const [loginUser, { isSuccess, data }] = useLoginUserMutation();

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    loginUser({
      password,
      email,
    });
  };

  useEffect(() => {
    if (isSuccess && data.access_token) {
      dispatch(setToken(data.access_token));
      setOpen(false);
    }
  }, [isSuccess]);

  return createPortal(
    <div
      onMouseDown={() => setOpen(false)}
      className="fixed z-50 inset-0 bg-black/70 flex items-center justify-center"
    >
      <div
        onMouseDown={(e) => e.stopPropagation()}
        className="w-[500px] border-t-4 border-(--prime)"
      >
        <div className="bg-[#1D1D1D] pt-5 flex gap-8 pr-5">
          <div className="w-25 h-24 bg-[#C53720]"></div>
          <div className="text-white mt-2.5">
            <p className="font-bold uppercase text-[24px]">обратный звонок</p>
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
        <form onSubmit={submit} className="bg-white p-5 flex flex-col">
          <div className="flex flex-col gap-4">
            <InputField
              value={form.email}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, email: value as string }))
              }
              label="Почта"
            />
            <InputField
              value={form.password}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, password: value as string }))
              }
              label="Пароль "
              type="password"
            />
          </div>
          <button className="uppercase text-[12px] font-bold text-[#C53720] py-3 px-5 border-4 transition-all cursor-pointer border-[#C53720] leading-2 ml-auto mt-4 hover:bg-[#C53720] hover:text-white">
            Login
          </button>
        </form>
      </div>
    </div>,
    document.body,
  );
}

export default AuthModal;
