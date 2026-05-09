import { useEffect, useState } from "react";

function ScrollBtn() {
  const [isTop, setIsTop] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  const handleScrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });
  const handleScrollToBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

  useEffect(() => {
    const hadnleScroll = () => {
      setIsTop(window.scrollY <= 0);
      setIsBottom(
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 5,
      );
    };
    document.addEventListener("scroll", hadnleScroll);
    hadnleScroll();

    return () => document.removeEventListener("scroll", hadnleScroll);
  }, []);

  return (
    <div className="flex flex-col fixed bottom-10 right-10.5 gap-3 z-50">
      <button
        onClick={handleScrollToTop}
        className={`group cursor-pointer ${isTop && "opacity-50"}`}
      >
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:bg-[#C53720] transition-all group-hover:[&>path]:stroke-white"
        >
          <rect
            x="2"
            y="2"
            width="48"
            height="48"
            transform="matrix(-4.37114e-08 1 1 4.37114e-08 2.18557e-06 8.74228e-08)"
            stroke="#C53720"
            strokeWidth="4"
          />
          <path d="M12 32L26 20L40 32" stroke="#C53720" stroke-width="4" />
        </svg>
      </button>
      <button
        onClick={handleScrollToBottom}
        className={`group rotate-180 ${isBottom && "opacity-50"}`}
      >
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:bg-[#C53720] transition-all group-hover:[&>path]:stroke-white"
        >
          <rect
            x="2"
            y="2"
            width="48"
            height="48"
            transform="matrix(-4.37114e-08 1 1 4.37114e-08 2.18557e-06 8.74228e-08)"
            stroke="#C53720"
            strokeWidth="4"
          />
          <path d="M12 32L26 20L40 32" stroke="#C53720" stroke-width="4" />
        </svg>
      </button>
    </div>
  );
}

export default ScrollBtn;
