import Image from "next/image";
import { Trash } from "../../components/trash";
import { formatPrice } from "@/utils/formatPrice";
import { useCart } from "@/hooks/useCart";
import { ProductCount } from "../../components/product/product-count";
import { ProductInCartType } from "@/models/ProductInCartType";
import { textTruncate } from "@/utils/textTruncate";

interface ShowProductProps {
  product: ProductInCartType;
}

export const ShowProduct = ({ product }: ShowProductProps) => {
  const { handleDeleteProductInCart } = useCart();

  return (
    <>
      <section
        style={{ maxWidth: 736, maxHeight: 211 }}
        className=" flex bg-white w-full h-full rounded-lg overflow-hidden ">
        <div className=" max-w-[100px] md:max-w-[256px] w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={256}
            height={211}
            className=" w-full h-full object-cover hidden md:block "
          />
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={120}
            height={120}
            className=" w-full h-full md:hidden block object-cover"
          />
        </div>
        <div className=" flex-1 flex flex-col justify-between sm:pl-8 pl-3 pr-4 sm:pt-4 py-2 ">
          <div className="h-auto ">
            <div className=" w-full flex items-center justify-between overflow-hidden">
              <h1 className=" line-clamp-1  md:text-[20px] text-base md:leading-[30px] text-zinc-500 font-light traki">
                {product.name}
              </h1>
              <Trash onClick={() => handleDeleteProductInCart(product)} />
            </div>
            <div className=" md:mt-3 text-justify text-sm text-zinc-500 ">
              <span className=" line-clamp-1 sm:line-clamp-2 md:line-clamp-4 leading-tight -tracking-wide ">
                {textTruncate(product.description)}
              </span>
            </div>
          </div>
          <div className=" w-full flex justify-between mt-2 items-center">
            <div>
              <ProductCount product={product} />
            </div>
            <span className=" font-semibold text-black text-base">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
