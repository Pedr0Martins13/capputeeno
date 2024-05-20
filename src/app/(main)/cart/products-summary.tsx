"use client";
import { formatPrice } from "@/utils/formatPrice";
import { Links } from "../../components/links";
import Image from "next/image";
import { Button } from "../../components/button";
import { useCart } from "@/hooks/useCart";

export const ProductSummary = () => {
  const { totalAmount } = useCart();
  return (
    <>
      <section
        className=" md:sticky md:right-0 md:top-24 md:z-10 md:w-auto w-full px-6 py-4 md:min-w-[352px] 
        min-w-full md:min-h-[600px] flex flex-col md:justify-between bg-white shadow-md rounded-md">
        {totalAmount <= 0 ? (
          <div className=" w-full h-ful flex flex-col gap-10 justify-center items-center mt-0 md:mt-20 ">
            <div>
              <Image
                src={"/empty_cart.svg"}
                alt="empty_cart"
                width={180}
                height={220}
              />
            </div>
            <p className=" text-xl font-light">Nenhum produto no carrinho</p>
          </div>
        ) : (
          <>
            <div>
              <h1 className=" text-zinc-900 text-xl leading-5 font-semibold uppercase mb-7">
                RESUMO DO PEDIDO
              </h1>
              <div className=" w-full flex flex-col gap-3 text-base font-normal mb-4">
                <div className=" w-full flex items-center justify-between">
                  <p>Subtotal de produtos</p>
                  <span>{formatPrice(totalAmount)}</span>
                </div>
                <div className=" w-full flex items-center justify-between">
                  <p>Entrega</p> <span>R$ 40,00</span>
                </div>
              </div>
              <hr className="w-full my-2" />
              <div className=" w-full flex items-center justify-between text-black font-semibold text-base mb-10">
                <p>Total</p>
                <span>{formatPrice(totalAmount + 4000)}</span>
              </div>
              <div>
                <Button
                  className=" bg-green-600"
                  label="FINALIZAR COMPRA"
                  onClick={() => console.log("comprou !")}
                />
              </div>
            </div>
            <div className=" md:mt-0 mt-10">
              <ul className=" space-y-3">
                <Links>Ajuda</Links>
                <Links>Reenbolsos</Links>
                <Links>Entrega e frete</Links>
                <Links>Trocas e devoluções</Links>
              </ul>
            </div>
          </>
        )}
      </section>
    </>
  );
};
