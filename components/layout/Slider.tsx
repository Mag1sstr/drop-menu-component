"use client";
import { useEffect, useState } from "react";

const banners = [
  { text: "ПРОФЕССИОНАЛЬНАЯ ПОМОЩЬ ВАШЕМУ АВТОМОБИЛЮ", img: "/banners/1.jpg" },
  { text: "КОМАНДА ВЫСОКОКЛАССНЫХ СПЕЦИАЛИСТОВ", img: "/banners/3.jpg" },
  {
    text: "ЗАБОТЛИВЫЙ СЕРВИС И СВОЕВРЕВЕННАЯ ИНФОРМАЦИЯ",
    img: "/banners/2.jpg",
  },
];
function Slider() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentBanner((prev) => (prev < banners.length - 1 ? prev + 1 : 0));
    }, 8000);

    return () => clearTimeout(timer);
  }, [currentBanner]);
  return (
    <div className="relative h-screen bg-black z-1 bg-[linear-gradient(90deg,#000000_-6.16%,rgba(0,0,0,0.5)_48.62%,rgba(0,0,0,0)_100%)]">
      {banners.map(({ text, img }, i) => (
        <div
          key={text}
          className={`absolute ${currentBanner === i ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-500 z-1 inset-0 after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(90deg,#000000_-6.16%,rgba(0,0,0,0.5)_48.62%,rgba(0,0,0,0)_100%)]`}
        >
          <img
            className="absolute z-0 w-full h-full object-cover"
            src={img}
            alt=""
          />
          <div className="relative z-10 h-full flex items-center">
            <div className="container">
              <h1 className=" text-white text-[48px] font-bold max-w-[586px] leading-none mb-13">
                {text}
              </h1>
              <button className="px-5 py-4.5 border-4 border-(--prime) text-white text-[14px] font-bold uppercase cursor-pointer hover:bg-white hover:text-black">
                ПЕРЕЙТИ В КАТАЛОГ
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute z-10 bottom-14.5 left-1/2 -translate-x-1/2 flex gap-3">
        {[...Array(banners.length)].map((_, i) => (
          <div
            onClick={() => setCurrentBanner(i)}
            className={`w-28 h-1 transition-all ${currentBanner === i ? "bg-(--prime)" : "bg-white"} cursor-pointer`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
