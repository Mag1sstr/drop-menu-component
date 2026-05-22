interface IProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}
function Button({ className, children, onClick, disabled }: IProps) {
  return (
    <button
      className={`py-3 px-5 border-4 border-(--prime) uppercase font-bold text-[14px] leading-1 text-white cursor-pointer ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
