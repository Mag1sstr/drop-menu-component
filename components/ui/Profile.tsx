"use client";
import { useState } from "react";
import AuthModal from "../modals/AuthModal";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { logout } from "@/store/authSlice";
import { useGetUserMutation } from "@/store/frostApi";
import { useAuth } from "@/contexts/AuthContext";

function Profile() {
  const { user, setToken, setUser, isUserLoading } = useAuth();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {user ? (
        <button
          className="uppercase border-4 border-(--prime) px-5 py-3 text-[12px] text-white self-center font-bold mr-5.75 whitespace-nowrap max-w-30 overflow-hidden text-ellipsis cursor-pointer transition-all hover:bg-white hover:text-black"
          title={user.firstName + " " + user.lastName}
        >
          {`${user.firstName} ${user.lastName}`}
        </button>
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
      <AuthModal open={openModal} setOpen={setOpenModal} />
    </>
  );
}

export default Profile;
