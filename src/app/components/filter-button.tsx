"use client";
import { FilterType } from "@/models/FilterTypes";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

interface FilterButtonProps {
  children: React.ReactNode;
  type: FilterType;
}

export const FilterButton = ({ children, type }: FilterButtonProps) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const handleFilterURL = (filter: "all" | "t-shirts" | "mugs") => {
    const params = new URLSearchParams(searchParams);
    if (!filter || filter === "all") {
      params.delete("filter");
    } else {
      params.delete("page");
      params.set("filter", filter);
    }
    return `${pathName}?${params}`;
  };

  const currentFilterParam = searchParams.get("filter") || "all";
  const isActive: boolean = currentFilterParam === type;
  // globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <>
      <Link
        href={handleFilterURL(type)}
        className={`relative flex justify-center items-center text-center p-2 
         text-[16px]  hover:text-zinc-900
         border-none ${
           isActive ? "text-zinc-900 font-bold" : "text-zinc-500"
         }`}>
        {children}
        {isActive && (
          <motion.span
            layoutId="tabs"
            className=" absolute w-full bottom-0 border-b-amber-500 text-zinc-900 
            font-medium border-b-[4px] border rounded-full"
            transition={{ type: "spring", bounce: 0.2, duration: 0.9 }}
          />
        )}
      </Link>
    </>
  );
};
