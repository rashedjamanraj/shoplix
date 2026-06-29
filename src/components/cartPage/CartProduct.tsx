import React, { useEffect, useState } from "react";
import { ProductType, StateType } from "../../../typs";
import Link from "next/link";
import Image from "next/image";
import PriceFormate from "../PriceFormate";
import AddToCartButton from "../AddToCartButton";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "@/redux/shoplixSlice";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa";

const CartProduct = ({ product }: { product: ProductType }) => {
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
  
    const regularPrice = product?.price;
    const discountedPrice = product?.price - (product?.price * product?.discountPercentage / 100) ;

  const disPatch = useDispatch();
  const handleRemoveProduct = () => {
    disPatch(removeFromCart(product?.id));
    toast.success(`${product?.title.substring(0, 20)} deleted successfully!`);
  };

  return (
    <div className="flex py-6 sm:py-10">
      <Link
        href={{
          pathname: `/products/${product?.id}`,
          query: { id: product?.id },
        }}
        className="h-24 w-24 sm:h-48 sm:w-48 border border-sky-300 hover:border-sky-400 overflow-hidden flex items-center justify-center rounded-md"
      >
        <Image
          src={product?.images[0]}
          alt="productImage"
          width={300}
          height={300}
          className="h-full w-full p-2 rounded-md object-contain bg-[#f7f7f7] hover:scale-110 duration-200"
        />
      </Link>
      {/* Details */}
      <div className=" ml-4 sm:ml-6 flex flex-1 flex-col justify-between">
        <div className=" relative p-4 sm:grid sm:grid-cols-4 sm:pr-0">
          <div className=" flex flex-col gap-1 col-span-5">
            <h3 className=" text-base font-semibold w-full">
              {product?.title.substring(0, 80)}
            </h3>
            <p className=" text-xs">
              Brand: <span className=" font-medium">{product?.brand}</span>
            </p>
            <p className=" text-xs">
              Category:{" "}
              <span className=" font-medium">{product?.category}</span>
            </p>
            <div className="flex items-center gap-1">
      <PriceFormate
        amount={existingProduct ? regularPrice * existingProduct?.quantity! : regularPrice}
        className=" text-gray-500 line-through font-normal"
      /> 
      <PriceFormate amount={existingProduct ? discountedPrice * existingProduct?.quantity! : discountedPrice} className=" pr-4 font-semibold text-sky-600" />
      <AddToCartButton product={product} />
    </div>
            
          </div>
          <div className=" sm:mt-0 sm:pr-9">
            <div className=" absolute right-0 top-0">
              <button
                onClick={handleRemoveProduct}
                className=" p-2 text-gray-600 rounded-md bg-gray-50 text-xl hover:bg-gray-100 hover:text-red-500 cursor-pointer"
              >
                <IoClose />
              </button>
            </div>
          </div>
        </div>
        <div className=" -mt-4 ml-4 flex flex-col gap-1">
    {product?.availabilityStatus && (
      <div className="flex items-center gap-2 text-sm text-gray-700">
        <FaCheck className="text-lg text-green-500" />
        <span className="font-medium">In Stock</span>
      </div>
    )}
    <div className=" flex items-center gap-2 text-sm">
      <span className="text-gray-700">You are saving</span>
      <PriceFormate
        className="text-green-600 font-semibold"
        amount={
          product?.price *
          (product?.discountPercentage / 100) *
          product?.quantity!
        }
      />
    </div>
  </div>
      </div>
    </div>
  );
};

export default CartProduct;
