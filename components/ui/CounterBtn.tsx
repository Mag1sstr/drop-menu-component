interface IProps {
  increase: () => void;
  decrease: () => void;
  count?: number;
}
function CounterBtn({ decrease, increase, count = 1 }: IProps) {
  return (
    <div className="flex border-2 border-[#A5A5A5] text-[14px] text-[#A5A5A5]">
      <button
        onClick={decrease}
        className="w-10 h-10 grid place-content-center border-2 border-[#A5A5A5] cursor-pointer"
      >
        -
      </button>
      <p className="w-21 grid place-content-center border-2 border-[#A5A5A5]">
        {count}
      </p>
      <button
        onClick={decrease}
        className="w-10 h-10 grid place-content-center border-2 border-[#A5A5A5] cursor-pointer"
      >
        +
      </button>
    </div>
  );
}

export default CounterBtn;
