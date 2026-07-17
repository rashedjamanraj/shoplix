"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeFromFavorites } from "@/redux/shoplixSlice";
import toast from "react-hot-toast";
import { ProductType } from "../../typs";
import AddToCartButton from "./AddToCartButton";

const FavoriteProduct = ({ product }: { product: ProductType }) => {
  const dispatch = useDispatch();

  const handleRemoveFavorite = () => {
    dispatch(removeFromFavorites(product?.id));
    toast.success(`${product?.title.substring(0, 20)} removed from favorites!`);
  };

  // ✅ Safe fallback for image
  const imageSrc =
    product?.images?.[0] && product?.images?.[0].trim() !== ""
      ? product.images[0]
      : null;

  return (
    <div className="flex py-4 md:py-6 sm:py-10">
      <Link
        href={{
          pathname: `/products/${product?.id}`,
          query: { id: product?.id },
        }}
        className="h-24 w-24 sm:h-32 sm:w-32 border border-sky-300 hover:border-sky-400 overflow-hidden flex items-center justify-center rounded-md"
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={product?.title || "favoriteImage"}
            width={300}
            height={300}
            className="h-full w-full p-2 rounded-md object-contain bg-[#f7f7f7] hover:scale-110 duration-200"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-sm">
            No Image
          </div>
        )}
      </Link>

      <div className="ml-4 sm:ml-6 flex flex-1 flex-col justify-between">
        <div className="relative p-4 sm:grid sm:grid-cols-4 sm:pr-0">
          <div className="flex flex-col gap-1 col-span-5">
            <h3 className="text-base font-semibold w-full">
              {product?.title?.substring(0, 80)}
            </h3>
            <p className="text-xs">
              Brand: <span className="font-medium">{product?.brand}</span>
            </p>
            <p className="text-xs">
              Category:{" "}
              <span className="font-medium">{product?.category}</span>
            </p>
            
          </div>
          <div className="sm:mt-0 sm:pr-9">
            <div className="absolute right-0 top-0">
              <button
                onClick={handleRemoveFavorite}
                className="p-1 text-gray-600 rounded-md bg-gray-50 text-xl hover:bg-gray-100 hover:text-red-500 cursor-pointer"
              >
                <IoClose />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteProduct;
