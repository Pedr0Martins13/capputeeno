"use client";
import { useRouter } from "next/navigation";
import { BackIcon } from "./icon/back-icon";
interface ReturnButtonProps {
  label?: string;
}
export const BackButton = ({ label }: ReturnButtonProps) => {
  const route = useRouter();
  return (
    <>
      <button
        onClick={() => route.back()}
        className=" inline-flex gap-2 justify-center items-center border-none outline-none 
       bg-transparent text-sm leading-[21px]text-slate-500 font-medium">
        <div>
          <BackIcon />
        </div>
        {label}
      </button>
    </>
  );
};
