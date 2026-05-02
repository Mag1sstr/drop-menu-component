"use client";
import Link from "next/link";
import NavLink from "../ui/NavLink";
import { useGetProductsQuery } from "@/store/api";
import DropdownMenu from "../ui/DropdownMenu";

const catelogData: IDropMenu[] = [
  {
    title: "АККУМУЛЯТОРЫ",
    path: "/",
    children: [
      { title: "АКБ MAGNUM", path: "/" },
      {
        title: "АКБ AKOM",
        path: "/",
        children: [
          { title: "АКБ MAGNUM", path: "/" },
          { title: "АКБ AKOM", path: "/" },
          { title: "АКБ BARS", path: "/" },
          { title: "АКБ AKOM", path: "/" },
          { title: "АКБ AKOM", path: "/" },
          { title: "АКБ AKOM", path: "/" },
        ],
      },
      { title: "АКБ BARS", path: "/" },
      { title: "АКБ MAGNUM", path: "/" },
      { title: "АКБ MAGNUM", path: "/" },
    ],
  },
  { title: "АВТОМАСЛА", path: "/" },
  { title: "АКСЕССУАРЫ", path: "/" },
  {
    title: "АВТОХИМИЯ",
    path: "/",
    children: [
      { title: "АКБ MAGNUM", path: "/" },
      { title: "АКБ AKOM", path: "/" },
      { title: "АКБ BARS", path: "/" },
    ],
  },
];

function Header() {
  return (
    <header className="bg-black/75 fixed left-0 right-0 z-50">
      <div className="container">
        <div className="flex">
          <Link href={"/"}>
            <img className="pt-6 pb-4.5 mr-6" src="/logo.png" alt="logo" />
          </Link>
          <nav className="flex flex-1 self-end">
            <ul className="flex gap-3 text-white uppercase font-medium">
              <NavLink
                className={(isActive) =>
                  `relative pb-6.5 px-2 cursor-pointer after:transition-all after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-(--prime) after:opacity-0 transition-all hover:after:opacity-100 ${isActive && "after:opacity-100"}`
                }
                href="/"
              >
                КОМПАНИЯ
              </NavLink>
              <li className="relative pb-6.5 px-2 cursor-pointer after:transition-all after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-(--prime) after:opacity-0 transition-all hover:after:opacity-100">
                КАТАЛОГ
                <DropdownMenu data={catelogData} />
              </li>
              <li className="relative pb-6.5 px-2 cursor-pointer after:transition-all after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-(--prime) after:opacity-0 transition-all hover:after:opacity-100">
                КАТАЛОГ
              </li>
              <li className="relative pb-6.5 px-2 cursor-pointer after:transition-all after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-(--prime) after:opacity-0 transition-all hover:after:opacity-100">
                УСЛУГИ
              </li>
              <li className="relative pb-6.5 px-2 cursor-pointer after:transition-all after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-(--prime) after:opacity-0 transition-all hover:after:opacity-100">
                ИНФОРМАЦИЯ
              </li>
              <li className="relative pb-6.5 px-2 cursor-pointer after:transition-all after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-(--prime) after:opacity-0 transition-all hover:after:opacity-100">
                КОНТАКТЫ
              </li>
            </ul>
          </nav>
          <button className="uppercase border-4 border-(--prime) px-5 py-3 text-[12px] text-white self-center font-bold">
            ЗАКАЗАТЬ ЗВОНОК
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
