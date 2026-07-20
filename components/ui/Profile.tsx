"use client";
import { useState } from "react";
import AuthModal from "../modals/AuthModal";
import { useAuth } from "@/contexts/AuthContext";
import RegModal from "../modals/RegModal";

function Profile() {
  const { user, setToken, setUser, isUserLoading, logout } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [openReg, setOpenReg] = useState(false);

  return (
    <>
      {user ? (
        <div className="relative self-center max-w-30">
          <button
            className="uppercase border-4 border-(--prime) px-5 py-3 text-[12px] text-white self-center font-bold whitespace-nowrap w-full overflow-hidden text-ellipsis cursor-pointer transition-all hover:bg-white hover:text-black"
            title={user.firstName + " " + user.lastName}
          >
            {`${user.firstName} ${user.lastName}`}
          </button>
          <div className="absolute z-50  top-full mt-2.5 right-0 w-50 py-2.5 bg-zinc-700 text-white">
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
            setOpenModal(true);
          }}
          className={`uppercase border-4 border-(--prime) px-5 py-3 text-[12px] text-white self-center font-bold mr-5.75 ${isUserLoading && "opacity-50"}`}
        >
          {isUserLoading ? "Загрузка..." : "Войти"}
        </button>
      )}
      <AuthModal
        open={openModal}
        setOpen={setOpenModal}
        setOpenReg={setOpenReg}
      />
      <RegModal open={openReg} setOpen={setOpenReg} />
    </>
  );
}

export default Profile;
