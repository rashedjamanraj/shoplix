import React from "react";
import { ProductType } from "../../typs";
import PriceFormate from "./PriceFormate";

const ProductPrice = ({ product }: { product: ProductType }) => {
  const regularPrice = product?.price;
  const discountedPrice = product?.price - (product?.price * product?.discountPercentage / 100) ;

  return (
    <div className="flex items-center gap-2">
      <PriceFormate
        amount={regularPrice}
        className=" text-gray-500 line-through font-normal"
      /> 
      <PriceFormate amount={discountedPrice}className=" font-semibold text-sky-600" />

     
    </div>
  );
};

export default ProductPrice;
