import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Cart from "@/components/pages/Cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Корзина",
};
function Page() {
  return (
    <>
      <Breadcrumbs />
      <Cart />
    </>
  );
}

export default Page;
