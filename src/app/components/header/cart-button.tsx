"use client";
import Link from "next/link";
import { CartIcon } from "../icon/cart-icon";
import { useCart } from "@/hooks/useCart";
interface CounterProps {
  qty: number;
}
const Counter = ({ qty }: CounterProps) => {
  return (
    <>
      <div
        aria-label={`quantidade de produtos no carrinho: ${qty}`}
        className=" 
        absolute -bottom-2 -right-2
      w-[17px] h-[17px] rounded-full text-[10px] font-medium 
      bg-red-500 text-zinc-100 flex items-center justify-center
      ">
        {qty}
      </div>
    </>
  );
};

export const Cart = () => {
  const { totalQty } = useCart();

  return (
    <>
      <div className="relative">
        <Link
          className="relative"
          aria-label="botão para acessar o carrinho de compras"
          href={"/cart"}>
          <CartIcon />
          {totalQty > 0 && <Counter qty={totalQty} />}
        </Link>
      </div>
    </>
  );
};
