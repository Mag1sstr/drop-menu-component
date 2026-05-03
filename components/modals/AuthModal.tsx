import { createPortal } from "react-dom";
import { useAuth } from "../providers/AuthContext";

function AuthModal() {
  const { token } = useAuth();
  console.log(token);

  return createPortal(
    <div className="fixed z-50 inset-0 bg-black/70 flex items-center justify-center">
      <div className="w-[500px] border-t-4 border-(--prime)">
        <div className="bg-[#1D1D1D] pt-5 flex gap-8 pr-5">
          <div className="w-25 h-24 bg-[#C53720]"></div>
          <div className="text-white mt-2.5">
            <p className="font-bold uppercase text-[24px]">обратный звонок</p>
            <p className="text-[12px] font-medium">
              Представьтесь, мы вам перезвоним.
            </p>
          </div>
          <button className="ml-auto cursor-pointer self-start">
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
      </div>
    </div>,
    document.body,
  );
}

export default AuthModal;
