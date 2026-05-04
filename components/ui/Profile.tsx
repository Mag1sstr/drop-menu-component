"use client";
import { useState } from "react";
import { useAuth } from "../providers/AuthContext";
import AuthModal from "../modals/AuthModal";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { logout } from "@/store/authSlice";

function Profile() {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          if (!user) {
            setOpenModal(true);
          } else {
            dispatch(logout());
          }
        }}
        className="uppercase border-4 border-(--prime) px-5 py-3 text-[12px] text-white self-center font-bold"
      >
        {user ? user.name : "Войти"}
      </button>
      {openModal && <AuthModal setOpen={setOpenModal} />}
    </>
  );
}

export default Profile;
