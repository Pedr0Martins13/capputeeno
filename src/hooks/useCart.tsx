"use client";

import { ProductInCartType } from "@/models/ProductInCartType";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type UseCartContextType = {
  totalAmount: number;
  totalQty: number;
  productsInCart: ProductInCartType[] | null;
  handleAddProductInCart: (product: ProductInCartType) => void;
  handleDeleteProductInCart: (product: ProductInCartType) => void;
  handleDecrementProduct: (product: ProductInCartType) => void;
  handleIncrementProduct: (product: ProductInCartType) => void;
};

interface Props {
  [propsName: string]: any;
}

export const CartContext = createContext<UseCartContextType | null>(null);

export const CartContextProvider = (props: Props) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [productsInCart, setProductsInCart] = useState<
    ProductInCartType[] | null
  >(null);

  useEffect(() => {
    const productsInJson = localStorage.getItem("products-in-cart-capputeeno");
    if (productsInJson) {
      const products: ProductInCartType[] | null = JSON.parse(productsInJson);

      setProductsInCart(products);
    }

    return;
  }, []);

  useEffect(() => {
    if (productsInCart) {
      const amount = productsInCart.reduce((acc, value) => {
        const total = value.price * value.quantity;
        return (acc += total);
      }, 0);

      setTotalAmount(amount);
      //console.log(formatPrice(amount));
    }
  }, [productsInCart]);

  useEffect(() => {
    if (productsInCart) {
      const quantity = productsInCart.reduce((acc, value) => {
        return (acc += value.quantity);
      }, 0);

      setTotalQty(quantity);
    }
  }, [productsInCart]);

  const handleAddProductInCart = useCallback(
    (product: ProductInCartType) => {
      let updateCart: ProductInCartType[];
      if (productsInCart) {
        updateCart = [...productsInCart];
        const productAlreadyExist = updateCart.findIndex(
          (item) => item.id === product.id
        );
        if (productAlreadyExist > -1) {
          updateCart[productAlreadyExist].quantity = ++updateCart[
            productAlreadyExist
          ].quantity;
        } else {
          updateCart = [...updateCart, product];
        }
      } else {
        updateCart = [product];
      }

      localStorage.setItem(
        "products-in-cart-capputeeno",
        JSON.stringify(updateCart)
      );

      setProductsInCart(updateCart);
    },
    [productsInCart]
  );

  const handleDeleteProductInCart = useCallback(
    (product: ProductInCartType) => {
      if (productsInCart) {
        const restProducts = productsInCart.filter((item) => {
          return item.id !== product.id;
        });

        setProductsInCart(restProducts);
        localStorage.setItem(
          "products-in-cart-capputeeno",
          JSON.stringify(restProducts)
        );
      }
    },
    [productsInCart]
  );

  const handleDecrementProduct = useCallback(
    (product: ProductInCartType) => {
      const MIN_REACHED = 1;
      if (product.quantity <= MIN_REACHED) return;
      if (productsInCart) {
        let decrementProduct = [...productsInCart];
        const productAlreadyExistInCart = productsInCart.findIndex(
          (item) => item.id === product.id
        );
        if (productAlreadyExistInCart > -1) {
          decrementProduct[productAlreadyExistInCart].quantity =
            --decrementProduct[productAlreadyExistInCart].quantity;
        }
        setProductsInCart(decrementProduct);
        localStorage.setItem(
          "products-in-cart-capputeeno",
          JSON.stringify(decrementProduct)
        );
      }
    },
    [productsInCart]
  );

  const handleIncrementProduct = useCallback(
    (product: ProductInCartType) => {
      const MAX_REACHED = 99;
      if (product.quantity >= MAX_REACHED) return;
      if (productsInCart) {
        let decrementProduct = [...productsInCart];
        const productAlreadyExistInCart = productsInCart.findIndex(
          (item) => item.id === product.id
        );
        if (productAlreadyExistInCart > -1) {
          decrementProduct[productAlreadyExistInCart].quantity =
            ++decrementProduct[productAlreadyExistInCart].quantity;
        }
        setProductsInCart(decrementProduct);
        localStorage.setItem(
          "products-in-cart-capputeeno",
          JSON.stringify(decrementProduct)
        );
      }
    },
    [productsInCart]
  );

  const value = {
    handleIncrementProduct,
    handleDecrementProduct,
    handleAddProductInCart,
    handleDeleteProductInCart,
    productsInCart,
    totalQty,
    totalAmount,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("CartContextProvider is required.");
  }

  return context;
};
