"use client";

import { useSelector } from "react-redux";
import { ProductType, StateType } from "../../../typs";
import Button from "../Button";
import CartProduct from "./CartProduct";
import CartSummary from "./CartSummary";

const CartProducts = () => {
  const { cart } = useSelector((state: StateType) => state?.shoplix);

  return (
    <div>
      {cart?.length > 0 ? (
        <>
          <h1 className=" text-3xl font-bold tracking-tight text-taupe-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <div className=" mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-1 2">
            <section className=" lg:col-span-7">
              <div className=" divide-y divide-gray-200 border-b border-t border-gray-200">
                {cart?.map((product: ProductType) => (
                  <CartProduct key={product?.id} product={product}/>
                ))}
              </div>
            </section>
            <CartSummary />
          </div>
        </>
      ) : (
        <div className=" bg-white h-96 my-10 flex flex-col gap-4 items-center justify-center py-5 rounded-lg border border-gray-200 drop-shadow-2xl">
          <p className=" text-base max-w-115 text-center text-gray-600 tracking-wide leading-6">
            Your cart is empty. Visit our site's product page to shop for your
            essentials from our vast collection of awesome products. Visit our
            shopping page.
          </p>
          <Button
            href="/"
            className=" rounded-md font-semibold bg-sky-600 hover:bg-amber-700"
          >
            Go to Shopping
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartProducts;
