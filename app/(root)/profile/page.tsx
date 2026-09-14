import OrdersTab from "@/components/layout/OrdersTab";

function ProfilePage() {
  return (
    <section className="py-22">
      <div className="container">
        <h1 className="text-[36px] mb-9 font-bold uppercase">Личный кабинет</h1>
        <div className="flex items-start gap-7.5">
          <div className="w-[370px] px-10 py-15 bg-white border border-[#E5E5E5]"></div>
          <OrdersTab />
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
