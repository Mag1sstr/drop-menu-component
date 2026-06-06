import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Filters from "@/components/layout/Filters";

function CatalogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs />

      <section className="bg-(--bg) text-(--text) pt-22">
        <div className="container">
          <h1 className="text-[36px] font-bold mb-9 uppercase">Каталог</h1>
          <div className="flex items-start gap-6">
            <Filters />
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CatalogLayout;
