"use client";

import { FiShoppingCart } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { ProductType, StateType } from "../../typs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuantity, increaseQuantity } from "@/redux/shoplixSlice";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

const AddToCartButton = ({
  product,
  className,
}: {
  product: ProductType;
  className?: string;
}) => {
  const { cart } = useSelector((state: StateType) => state?.shoplix);
  const [existingProduct, setExistingProduct] = useState<ProductType | null>(
    null,
  );
  useEffect(() => {
    const availableProduct = cart?.find((item) => item?.id === product?.id);
    if (availableProduct) {
      setExistingProduct(availableProduct);
    }
  }, [cart, product]);

  const disPatch = useDispatch();
  const handleAddToCart = () => {
    if (product) {
      disPatch(addToCart(product));
      toast.success(`${product?.title.substring(0, 10)} added successfully!`);
    }
  };

  return (
    <>
      {existingProduct ? (
        <div className=" flex self-start items-center justify-center gap-2 py-2 mb-2">
          <button
            onClick={() => {
              (disPatch(decreaseQuantity(product?.id)),
                toast.success("Quantity decrease successfully!"));
            }}
            disabled={existingProduct?.quantity! <= 1}
            className=" bg-[#f7f7f7] text-black p-2 border border-gray-200 hover:border-sky-500 rounded-full text-sm hover:bg-white duration-200 cursor-pointer disabled:text-gray-300 disabled:hover:bg-[#f7f7f7]"
          >
            <FaMinus />
          </button>
          <p className=" text-base font-semibold w-10 text-center">
            {existingProduct?.quantity}
          </p>
          <button
            onClick={() => {
              (disPatch(increaseQuantity(product?.id)),
                toast.success("Quantity increase successfully!"));
            }}
            className=" bg-[#f7f7f7] text-black p-2 border border-gray-200 hover:border-sky-500 rounded-full text-sm hover:bg-white duration-200 cursor-pointer disabled:text-gray-300 disabled:hover:bg-[#f7f7f7]"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className={twMerge(
            " flex items-center justify-center text-black font-semibold text-md gap-2 bg-transparent border border-sky-600 rounded-full py-1.5 hover:bg-sky-600 hover:text-white duration-300 my-2 cursor-pointer",
            className,
          )}
        >
          <FiShoppingCart /> Add to Cart
        </button>
      )}
    </>
  );
};

export default AddToCartButton;
