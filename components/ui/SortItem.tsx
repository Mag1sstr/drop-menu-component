interface IProps {
  name: string;
}
function SortItem() {
  return (
    <li className="text-[#1D1D1D]/50 mr-2">
      Цене{" "}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 8L10 12L16 8" stroke="#C53720" strokeWidth="4" />
      </svg>
    </li>
  );
}

export default SortItem;
