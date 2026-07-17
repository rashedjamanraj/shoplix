"use client";

import { useSelector } from "react-redux";


import FavoriteProduct from "./FavoriteProduct";
import { ProductType, StateType } from "../../typs";
import Button from "./Button";

const Favorites = () => {
  const { favorite } = useSelector((state: StateType) => state?.shoplix);

  return (
    <div>
      {favorite?.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold tracking-tight text-taupe-900 sm:text-4xl">
            My Favorites
          </h1>
          <div className="mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12">
            <section className="lg:col-span-7">
              <div className="divide-y divide-gray-200 border-b border-t border-gray-200">
                {favorite?.map((product: ProductType) => (
                  <FavoriteProduct key={product?.id} product={product} />
                ))}
              </div>
            </section>
          </div>
        </>
      ) : (
        <div className="bg-white h-96 my-10 flex flex-col gap-4 items-center justify-center py-5 rounded-lg border border-gray-200 drop-shadow-2xl">
          <p className="text-base max-w-115 text-center text-gray-600 tracking-wide leading-6">
            Your favorites list is empty. Browse products and add them to your
            favorites to see them here.
          </p>

          <Button href="/"
            className="rounded-md font-semibold bg-sky-500 hover:bg-sky-600">
              Go to Shopping
          </Button>
      
        </div>
      )}
    </div>
  );
};

export default Favorites;
