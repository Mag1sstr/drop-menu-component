import ModalWrapper from "./ModalWrapper";
interface IProps {
  open: boolean;
  setOpen: (b: boolean) => void;
}
function AuthModal({ open, setOpen }: IProps) {
  console.log(open);

  return (
    <ModalWrapper open={open} setOpen={setOpen}>
      <form className="w-125" action="">
        <div className="border-t-4 border-(--prime) bg-[#1D1D1D] flex gap-8 pt-5 text-white">
          <div className="w-25 h-24 bg-(--prime) p-4 mask-[url('/box.svg')]"></div>
          <div className="flex flex-col gap-2">
            <p className="uppercase text-[24px] font-bold">обратный звонок</p>
            <p></p>
          </div>
        </div>
      </form>
    </ModalWrapper>
  );
}

export default AuthModal;
