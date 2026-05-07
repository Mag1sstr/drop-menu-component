import { IDropMenu } from "@/app/types";
import DropItem from "./DropItem";

interface IProps {
  data: IDropMenu[];
  className?: string;
}

function DropdownMenu({ data, className }: IProps) {
  return (
    <div
      className={`w-[228px] py-3 bg-black/70 absolute left-0 top-full ${className}`}
    >
      {data.map((item) => (
        <DropItem key={item.title} {...item} />
      ))}
    </div>
  );
}

export default DropdownMenu;
