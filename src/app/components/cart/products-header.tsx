"use client";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/utils/formatPrice";

export const ProductsHeader = () => {
  const { productsInCart, totalAmount } = useCart();
  const qty = productsInCart ? productsInCart.length : 0;
  return (
    <>
      <header className="mb-1.5">
        <h1 className=" text-2xl font-normal text-zinc-800">
          {qty > 0 ? "SEU CARRINHO" : "SEU CARRINHO ESTÁ VAZIO :("}
        </h1>
        <div className=" flex items-center text-base font-light">
          <p>Total ({qty} produtos)</p>
          <span className=" ml-1 text-black font-semibold">
            {formatPrice(totalAmount)}
          </span>
        </div>
      </header>
    </>
  );
};
