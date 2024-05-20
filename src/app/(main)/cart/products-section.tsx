"use client";

import { useCart } from "@/hooks/useCart";
import { ProductInCartType } from "@/models/ProductInCartType";
import { useSearchParams } from "next/navigation";
import { ShowProduct } from "./show-products";

export const ProductsSection = () => {
  const search = useSearchParams().get("query") || "";
  const { productsInCart } = useCart();

  function customSort(a: ProductInCartType, b: ProductInCartType) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    const searchInputLower = search.toLowerCase();

    // Check if the product name contains the search input
    const containsSearchInputA = nameA.includes(searchInputLower);
    const containsSearchInputB = nameB.includes(searchInputLower);

    if (containsSearchInputA && !containsSearchInputB) {
      return -1; // Move product A up in the list
    }
    if (!containsSearchInputA && containsSearchInputB) {
      return 1; // Move product B up in the list
    }
    return 0; // Maintain the current order
  }
  const productsInCartList = productsInCart?.sort(customSort);

  return (
    <div className="flex flex-col gap-4 mb-20">
      {productsInCartList &&
        productsInCartList.map((product) => (
          <ShowProduct key={product.id} product={product} />
        ))}
    </div>
  );
};
