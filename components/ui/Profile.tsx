"use client";
import { useContext, useRef, useState } from "react";
import AuthModal from "../modals/AuthModal";
import { useAuth } from "@/contexts/AuthContext";
import RegModal from "../modals/RegModal";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useToast } from "@/contexts/ToastContext";
import { useRouter } from "next/navigation";
import { ModalsContext } from "@/contexts/ModalsContext";

function Profile() {
  const { user, isUserLoading, logout } = useAuth();
  const [drop, setDrop] = useState(false);
  // const [openModal, setOpenModal] = useState(false);
  const { toggle } = useContext(ModalsContext);
  const [openReg, setOpenReg] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const { toast } = useToast();

  useClickOutside(profileRef, () => {
    setDrop(false);
  });
  return (
    <>
      {user ? (
        <div ref={profileRef} className="relative self-center max-w-30">
          <button
            className="uppercase border-4 border-(--prime) px-5 py-3 text-[12px] text-white self-center font-bold whitespace-nowrap w-full overflow-hidden text-ellipsis cursor-pointer transition-all hover:bg-white hover:text-black"
            title={user.firstName + " " + user.lastName}
            onClick={() => {
              setDrop((prev) => !prev);
              toast.success("67");
            }}
          >
            {`${user.firstName} ${user.lastName}`}
          </button>
          <div
            className={`absolute z-50  top-full mt-2.5 right-0 w-50 py-2.5 bg-zinc-900/90 text-white transition-all ${drop ? "visible opacity-100" : "invisible opacity-0"}`}
          >
            <div
              onClick={() => {
                router.push("/profile");
              }}
              className="px-3 group cursor-pointer"
            >
              <div className="border-b border-white py-3 group-hover:border-(--prime) group-hover:text-(--prime)">
                Профиль
              </div>
            </div>
            <div
              onClick={() => {
                logout();
              }}
              className="px-3 group cursor-pointer"
            >
              <div className="border-b border-white py-3 group-hover:border-(--prime) group-hover:text-(--prime)">
                Выйти
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => {
            toggle("login");
          }}
          className={`uppercase border-4 border-(--prime) px-5 py-3 text-[12px] text-white self-center font-bold mr-5.75 ${isUserLoading && "opacity-50"}`}
        >
          {isUserLoading ? "Загрузка..." : "Войти"}
        </button>
      )}
      <AuthModal
        // open={openModal}
        // setOpen={setOpenModal}
        setOpenReg={setOpenReg}
      />
      <RegModal
        open={openReg}
        setOpen={setOpenReg}
        // setOpenLogin={setOpenModal}
      />
    </>
  );
}

export default Profile;
