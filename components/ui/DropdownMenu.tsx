import DropItem from "./DropItem";

interface IProps {
  data: IDropMenu[];
}

function DropdownMenu({ data }: IProps) {
  return (
    <div className="w-[228px] py-3 bg-black/70 absolute left-0 top-full">
      {data.map((item) => (
        <DropItem key={item.title} {...item} />
      ))}
    </div>
  );
}

export default DropdownMenu;
