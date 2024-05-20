"use client";
import { ChangeEvent, useEffect, useRef } from "react";
import { GoSearch } from "react-icons/go";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const HeaderSearch = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement
        ) {
          return;
        }
        e.preventDefault();
        ref.current?.focus();
      }
    };

    document.addEventListener("keydown", down);

    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSearch = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      if (e.target.value) {
        params.delete("page");
        params.set("query", e.target.value);
      } else {
        params.delete("query");
      }
      replace(`${pathName}?${params.toString()}`);
    },
    300
  );

  return (
    <div className=" relative md:min-w-[352px] max-w-[352px] w-full">
      <input
        type="text"
        className="w-full py-1 md:py-2 pl-3 pr-10 text-zinc-800 text-sm rounded-md md:rounded-lg bg-zinc-200 
        md:placeholder:text-sm placeholder:text-[10px] "
        onChange={handleSearch}
        ref={ref}
        defaultValue={searchParams.get("query")?.toString()}
        placeholder="Procurando por algo específico?"
      />
      <GoSearch className="absolute w-[18px] h-[18px] md:w-5 md:h-5 text-zinc-400 top-1/2 -translate-y-1/2 right-2 text-xl" />
    </div>
  );
};
