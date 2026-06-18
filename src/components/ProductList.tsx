import React from "react";
import Container from "./Container";
import Image from "next/image";
import ProductCard from "./ProductCard";
import { ProductType } from "../../typs";


interface Props {
  products: {
    products: ProductType[];
  }
}

const ProductList = ({ products }: Props) => {
  return (
    
      <Container className=" py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {products?.map((item: ProductType) => (
          <ProductCard key={item?.id} product={item} />
        ))}
      </Container>
    
  );
};

export default ProductList;
