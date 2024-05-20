"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

interface PaginationArrowProps {
  direction: "right" | "left";
  href: string;
  disabled: boolean;
}

const PaginationArrow = ({
  direction,
  href,
  disabled,
}: PaginationArrowProps) => {
  const styles = `
          border-none text-zinc-500 bg-zinc-200 text-xs p-3 outline-none 
          rounded-lg w-8 h-8 flex justify-center items-center font-semibold
          ${disabled && "cursor-not-allowed opacity-60"}
          `;

  const icon =
    direction === "left" ? (
      <MdOutlineKeyboardArrowLeft />
    ) : (
      <MdOutlineKeyboardArrowRight />
    );

  return !disabled ? (
    <Link
      aria-label="avançar para a proxima pagina"
      href={href}
      className={styles}>
      {icon}
    </Link>
  ) : (
    <div className={styles}>{icon}</div>
  );
};

interface PaginationButtonProps {
  href: string;
  isSelected: boolean;
  page: number;
}

const PaginationButton = ({
  href,
  page,
  isSelected,
}: PaginationButtonProps) => {
  const style = `text-xs p-3 outline-none rounded-lg w-8 h-8 
        flex justify-center items-center font-semibold 
        ${
          isSelected
            ? "border border-amber-500 text-amber-500 cursor-not-allowed"
            : "border-none text-zinc-500 bg-zinc-200"
        }`;
  return isSelected ? (
    <div className={style}>{page}</div>
  ) : (
    <Link className={style} href={href}>
      {page}
    </Link>
  );
};

function generatePagination(totalPages: number, currentPage: number) {
  const MAX_PAGES_BUTTON_IN_SCREEN = 5;
  if (totalPages <= MAX_PAGES_BUTTON_IN_SCREEN) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const initialBlock =
    Math.floor((currentPage - 1) / MAX_PAGES_BUTTON_IN_SCREEN) *
      MAX_PAGES_BUTTON_IN_SCREEN +
    1;
  return Array.from(
    {
      length: Math.min(
        MAX_PAGES_BUTTON_IN_SCREEN,
        totalPages - initialBlock + 1
      ),
    },
    (_, i) => initialBlock + i
  );
}

interface PaginationProps {
  totalPages: number;
}

export const Pagination = ({ totalPages }: PaginationProps) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const allPagesInScreen = generatePagination(totalPages, currentPage);

  function createPageURL(page: number) {
    const params = new URLSearchParams(searchParams);
    if (page <= 1) {
      params.delete("page");
    } else {
      params.set("page", page.toString());
    }
    return `${pathName}?${params}`;
  }

  return (
    <>
      <div className=" inline-flex justify-center items-center gap-[2px]">
        {allPagesInScreen.map((page, i) => (
          <PaginationButton
            key={i}
            href={createPageURL(page)}
            page={page}
            isSelected={page === currentPage}
          />
        ))}
        {totalPages > 5 && (
          <div className=" ml-2 inline-flex justify-center items-center gap-1">
            <PaginationArrow
              direction="left"
              href={createPageURL(currentPage - 1)}
              disabled={currentPage <= 1}
            />
            <PaginationArrow
              direction="right"
              href={createPageURL(currentPage + 1)}
              disabled={currentPage + 1 >= totalPages}
            />
          </div>
        )}
      </div>
    </>
  );
};
