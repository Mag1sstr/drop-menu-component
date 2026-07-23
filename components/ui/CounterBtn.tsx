interface IProps {
  increase: () => void;
  decrease: () => void;
  count?: number;
  className?: string;
}
function CounterBtn({ decrease, increase, count = 0, className }: IProps) {
  return (
    <div className={`inline-block ${className}`}>
      <div className="flex border-2 border-[#A5A5A5] text-[14px] text-[#A5A5A5]">
        <button
          onClick={decrease}
          className="w-10 h-10 grid place-content-center border-2 border-[#A5A5A5] cursor-pointer"
        >
          -
        </button>
        <p className="flex-1 grid place-content-center border-2 border-[#A5A5A5]">
          {count}
        </p>
        <button
          onClick={increase}
          className="w-10 h-10 grid place-content-center border-2 border-[#A5A5A5] cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CounterBtn;
