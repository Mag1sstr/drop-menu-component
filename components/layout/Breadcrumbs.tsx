"use client";
import { usePathname, useRouter } from "next/navigation";

function Breadcrumbs() {
  const location = usePathname().split("/").filter(Boolean);
  const router = useRouter();

  const fullPath = ["Главная", ...location];

  console.log(fullPath);

  return (
    <div className="bg-white">
      <div className="container">
        <div className="py-4 flex gap-4">
          {fullPath.map((el, i) => (
            <div
              onClick={() => {
                const path =
                  "/" +
                  fullPath
                    .slice(0, i + 1)
                    .filter((v) => v !== "Главная")
                    .join("/");

                router.push(path);
              }}
              className={`flex items-center gap-4  font-medium text-[12px] uppercase leading-none ${el === fullPath.at(-1) ? "text-[#1D1D1D]" : "text-[#C53720] cursor-pointer"}`}
            >
              {el}
              {el !== fullPath.at(-1) && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 4L12 10L8 16" stroke="#C53720" strokeWidth="4" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Breadcrumbs;
