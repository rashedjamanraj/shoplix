"use client";

import React, { useEffect, useState } from "react";
import { ProductType, StateType } from "../../typs";
import PriceFormate from "./PriceFormate";
import { useSelector } from "react-redux";

const ProductPrice = ({ product }: { product: ProductType }) => {
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

  return (
    <div className="flex items-center gap-2">
      <PriceFormate
        amount={existingProduct ? regularPrice * existingProduct?.quantity! : regularPrice}
        className=" text-gray-500 line-through font-normal"
      /> 
      <PriceFormate amount={existingProduct ? discountedPrice * existingProduct?.quantity! : discountedPrice} className=" font-semibold text-sky-600" />
    </div>
  );
};

export default ProductPrice;
