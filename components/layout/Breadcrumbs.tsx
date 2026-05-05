import { usePathname } from "next/navigation";

function Breadcrumbs() {
  const location = usePathname().split(" ").filter(Boolean);

  console.log(location);

  return (
    <div className="bg-white">
      <div className="container">
        <div className="py-4 flex gap-4"></div>
      </div>
    </div>
  );
}
export default Breadcrumbs;
