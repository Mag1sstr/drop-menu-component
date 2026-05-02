import { useRouter } from "next/navigation";

function DropItem({ title, path, children }: IDropMenu) {
  const router = useRouter();

  return (
    <div
      className={`p-2 group relative group border-b flex items-center justify-between border-[#1D1D1D] uppercase text-white text-[12px] font-medium hover:bg-(--prime) hover:text-white ${children && ""}`}
      onClick={() => router.push(path)}
    >
      {title}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`opacity-0 ${children && "group-hover:opacity-100"} `}
      >
        <path d="M8 4L12 10L8 16" stroke="white" strokeWidth="4" />
      </svg>

      {children && (
        <div className="left-full opacity-0 group-hover:opacity-100 absolute -top-3 w-[228px] py-3 bg-black/70">
          {children.map((item) => (
            <DropItem key={item.title} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default DropItem;
