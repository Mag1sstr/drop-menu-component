import { createPortal } from "react-dom";
import { useAuth } from "../providers/AuthContext";
import { FormEvent, useEffect, useRef } from "react";
import { useLoginUserMutation } from "@/store/api";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setToken } from "@/store/authSlice";
interface IProps {
  setOpen: (b: boolean) => void;
}
function AuthModal({ setOpen }: IProps) {
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);
  const [loginUser, { isSuccess, data }] = useLoginUserMutation();

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.current?.value || !password.current?.value) return;
    loginUser({
      password: password.current.value,
      email: email.current.value,
    });
    console.log("1");
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
        <form onSubmit={submit} className="bg-white p-5">
          <input ref={email} type="email" placeholder="email" />
          <input ref={password} type="password" placeholder="pass" />\
          <button className="bg-blue-600">Login</button>
        </form>
      </div>
    </div>,
    document.body,
  );
}

export default AuthModal;
