import { IoIosArrowDown } from "react-icons/io";

interface SelectButtonProps {
  label: string;
  onClick: () => void;
}

export const SelectButton = ({ label, onClick }: SelectButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className=" relative bg-transparent  w-full flex border-none outline-none 
        text-sm justify-center items-center gap-2 text-zinc-500
        ">
        {label}
        <IoIosArrowDown />
      </button>
    </>
  );
};
