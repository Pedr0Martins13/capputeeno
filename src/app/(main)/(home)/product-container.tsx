"use client";
import { useProducts } from "@/hooks/useProducts";
import { Pagination } from "./pagination";

import { ProductCard } from "../../components/product/product-card";
import { SkeletonProductCard } from "../../components/skeleton";

import Link from "next/link";

export const ProductContainer = () => {
  const { products, isLoading, totalPages } = useProducts();

  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-gray-100 justify-items-center grid gap-3 grid-cols-2 md:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-[25px]">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonProductCard key={i} />
        ))}
      </div>
    );
  }

  if (!products?.length) {
    return (
      <div className="w-full h-screen flex  flex-col gap-7 items-center justify-center">
        <h1 className="text-4xl font-medium text-zinc-500">
          Nenhum Produto Encontrado : (
        </h1>
        <Link href="/">Voltar ?</Link>
      </div>
    );
  }

  return (
    <>
      <div className=" w-full h-[64px] flex items-center justify-end">
        <div className=" flex justify-center items-center gap-[2px] ">
          {<Pagination totalPages={totalPages} />}
        </div>
      </div>
      <div
        className=" w-full min-h-screen bg-gray-100 justify-items-center grid gap-3 grid-cols-2 
          md:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-[25px]">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
      </div>
      <div className=" w-full h-[64px] flex items-center justify-end">
        <div className=" flex justify-center items-center gap-[2px] ">
          {<Pagination totalPages={totalPages} />}
        </div>
      </div>
    </>
  );
};
