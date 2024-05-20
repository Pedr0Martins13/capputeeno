"use client";
import { Button } from "@/app/components/button";
import { CartIcon } from "@/app/components/icon/cart-icon";
import { useCart } from "@/hooks/useCart";
import { useGetProductById } from "@/hooks/useGetProductById";
import { ProductInCartType } from "@/models/ProductInCartType";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";

interface ProductDetailsProps {
  productId: string;
}

export const ProductDetails = ({ productId }: ProductDetailsProps) => {
  const { handleAddProductInCart } = useCart();
  const product = useGetProductById(productId);
  if (!product) return;

  const productInCart: ProductInCartType = {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price_in_cents,
    imageUrl: product.image_url,
    category: product.category,
    quantity: 1,
  };

  return (
    <>
      <main className=" w-full h-full grid grid-cols-1 md:grid-cols-2 ">
        <section className=" relative w-full h-full rounded overflow-hidden ">
          <Image
            src={productInCart.imageUrl}
            alt={productInCart.name}
            width={640}
            height={580}
            className="w-full h-full object-cover"
          />
        </section>
        <section className=" mt-5 sm:mt-0 text-zinc-600 w-full h-full md:px-8 flex flex-col justify-between">
          <div className="flex flex-col ">
            <p className="text-base ">
              {productInCart.category.charAt(0).toUpperCase() +
                productInCart.category.slice(1)}
            </p>
            <h1 className=" text-2xl md:text-[32px] md:leading-[42px] font-light mt-3 ">
              {productInCart.name}
            </h1>
            <span className=" font-extrabold text-black text-[20px]">
              {formatPrice(productInCart.price)}
            </span>
            <span className=" text-xs leading-[18px] mt-6">
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </span>
            <h2 className=" text-base text-zinc-400 font-semibold sm:mt-[58px] mt-8">
              DESCRIÇÃO
            </h2>
            <p className=" text-sm leading-[21px] mt-2">
              {productInCart.description}
            </p>
          </div>
          <div className="w-full h-[42px]">
            <Button
              className="bg-brand-blue"
              icon={<CartIcon bg="#FFF" />}
              label="ADICIONAR AO CARRINHO"
              onClick={() => handleAddProductInCart(productInCart)}
            />
          </div>
        </section>
      </main>
    </>
  );
};
