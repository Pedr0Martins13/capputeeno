interface ButtonProps {
  label: string;
  className?: string;
  icon?: React.ReactElement;
  onClick: () => void;
}

export const Button = ({
  label,
  className,
  onClick,
  icon: Icon,
}: ButtonProps) => {
  return (
    <>
      <button
        className={`w-full 
      border-none outline-none 
      rounded inline-flex justify-center 
      items-center gap-3 text-base
      ${className}
       py-[10px]
      text-white font-normal`}
        onClick={onClick}>
        {Icon && <div>{Icon}</div>}
        {label}
      </button>
    </>
  );
};
