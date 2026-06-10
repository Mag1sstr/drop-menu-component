"use client";
import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";

function Breadcrumbs() {
  const location = usePathname().split("/").filter(Boolean);
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const fullPath = ["Главная", ...location];

  const breadcrumbsNames: Record<string, string> = {
    catalog: "каталог",
  };

  return (
    fullPath.length - 1 > 0 && (
      <div ref={ref} className="bg-(--bg-breadcrumbs)">
        <div className="container">
          <div className="py-4 flex gap-4">
            {fullPath.map((el, i) => (
              <div
                key={el}
                onClick={() => {
                  const path =
                    "/" +
                    fullPath
                      .slice(0, i + 1)
                      .filter((v) => v !== "Главная")
                      .join("/");

                  router.push(path);
                }}
                className={`flex items-center gap-4  font-medium text-[12px] uppercase leading-none ${el === fullPath.at(-1) ? "text-(--text)" : "text-[#C53720] cursor-pointer"}`}
              >
                {breadcrumbsNames[el] || el}
                {el !== fullPath.at(-1) && (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 4L12 10L8 16"
                      stroke="#C53720"
                      strokeWidth="4"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
export default Breadcrumbs;
