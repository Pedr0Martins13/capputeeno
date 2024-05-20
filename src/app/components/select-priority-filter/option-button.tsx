"use client";
import { PriorityType } from "@/models/PriorityType";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface OptionButtonProps {
  label: string;
  type: PriorityType;
}

export const OptionButton = ({ label, type }: OptionButtonProps) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const handlePriorityURL = (
    priority: "news" | "lowest_price" | "biggest_price" | "best_sellers"
  ) => {
    const params = new URLSearchParams(searchParams);
    if (!priority || priority === "news") {
      params.delete("priority");
    } else {
      params.delete("page");
      params.set("priority", priority);
    }
    return `${pathName}?${params}`;
  };

  return (
    <>
      <Link
        href={handlePriorityURL(type)}
        className=" w-full py-1 bg-transparent text-zinc-500 text-sm text-left font-normal">
        {label}
      </Link>
    </>
  );
};
