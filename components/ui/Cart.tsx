import { useState } from "react";

function Cart() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setOpen((prev) => !prev)}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.3594 11L29.9844 23H14V11H33.3594Z"
              stroke="white"
              stroke-width="4"
            />
            <path d="M14 4L14 24.5" stroke="white" strokeWidth="4" />
            <path d="M14 6H4" stroke="white" strokeWidth="4" />
            <circle cx="17" cy="31" r="3" stroke="white" strokeWidth="4" />
            <circle cx="28" cy="31" r="3" stroke="white" strokeWidth="4" />
          </svg>
        </button>
        <div className="w-8 h-8 rounded-full bg-[#C53720] flex items-center justify-center text-white font-bold">
          2
        </div>
      </div>
    </>
  );
}

export default Cart;
