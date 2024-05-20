import { useCart } from "@/hooks/useCart";
import { ProductInCartType } from "@/models/ProductInCartType";

interface ProductCountProps {
  product: ProductInCartType;
}
export const ProductCount = ({ product }: ProductCountProps) => {
  const { handleIncrementProduct, handleDecrementProduct } = useCart();
  const countButtonStyle =
    " border-none text-xs outline-none bg-gray-100 text-zinc-700 font-semibold flex justify-center items-center px-[6px] py-2 ";
  return (
    <>
      <div className=" w-full flex items-center rounded-md overflow-hidden shadow-sm">
        <button
          aria-label="botão para diminuir a quantidade do produto no carrinho"
          onClick={() => handleDecrementProduct(product)}
          className={countButtonStyle}>
          -
        </button>
        <span
          aria-label={`quantidade: ${product.quantity}`}
          className=" w-8 flex items-center justify-center px-3 py-1 text-zinc-700">
          {product.quantity}
        </span>
        <button
          aria-label="botão para almentar a quantidade do produto no carrinho "
          onClick={() => handleIncrementProduct(product)}
          className={countButtonStyle}>
          +
        </button>
      </div>
    </>
  );
};
