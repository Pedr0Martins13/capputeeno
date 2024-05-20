import { IProduct } from "@/models/IProducts";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import Link from "next/link";

interface ProductCartPros {
  data: IProduct;
}

export const ProductCard = ({ data }: ProductCartPros) => {
  return (
    <>
      <Link href={`/product/${data.id}`}>
        <div
          className="flex flex-col cursor-pointer sm:max-w-[256px] max-w-[176px] max-h-[378px] 
          bg-white rounded overflow-hidden">
          <div className=" relative aspect-square w-full sm:min-h-[300px] min-h-[176px] h-full">
            <Image
              src={data.image_url}
              alt={data.name}
              fill
              className=" w-full h-full object-cover"
            />
          </div>
          <div className=" max-h-[78px] h-full px-3 py-2 flex flex-col justify-center">
            <p className=" sm:text-[16px] text-sm font-light">{data.name}</p>
            <hr className=" w-full my-2" />
            <span className="sm:text-sm text-[10px] font-extrabold text-black">
              {formatPrice(data.price_in_cents)}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};
