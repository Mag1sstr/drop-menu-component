"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  href: string;
  children: React.ReactNode;
  className?: (isActive: boolean) => string;
}
function NavLink({ href, children, className }: IProps) {
  const pathname = usePathname();
  return (
    <Link className={className ? className(pathname === href) : ""} href={href}>
      {children}
    </Link>
  );
}

export default NavLink;
