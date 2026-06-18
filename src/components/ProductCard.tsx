import Link from "next/link";
import { ProductType } from "../../typs";
import Image from "next/image";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className=" border border-gray-400 hover:shadow-lg hover:shadow-black/30 duration-200 rounded-md group overflow-hidden relative">
      {/* image */}
      <Link href={"/products"}>
        <Image src={product?.images[0]} alt="Product-Image" 
        width={500}
        height={500}
        priority={true}
        className=" w-full h-64 object-contain hover:scale-110 duration-300"
        />
        <p className=" absolute top-2 right-2 text-white bg-orange-500 py-1 px-2 text-xs rounded-lg">{product?.discountPercentage}%</p>
      </Link>
    </div>
  );
};

export default ProductCard;
