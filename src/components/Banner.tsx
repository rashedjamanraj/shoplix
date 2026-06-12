import React from "react";
import Container from "./Container";
import { banner } from "@/constants";
import Image from "next/image";
import Button from "./Button";
import { GoArrowRight } from "react-icons/go";

const Banner = () => {
  return (
    <div className=" bg-cyan-700 py-20 text-white">
      <Container className=" flex flex-col md:flex-row  gap-5 items-center justify-between">
        <div className=" flex flex-col gap-5">
          <p className=" text-base font-semibold">{banner?.priceText}</p>
          <h2 className=" text-5xl font-bold max-w-125 ">{banner?.title}</h2>
          <p className="text-lg font-bold">
            {" "}
            {banner?.textOne}{" "}
            <span className=" text-yellow-300 mx-1"> {banner?.offerPrice}</span>
            {banner.textTwo}
          </p>
          <Button href={banner?.buttonLink} className='flex items-center gap-1 bg-white text-black rounded-md w-32 px-0 justify-center text-sm font-semibold hover:bg-transparent hover:text-white py-3 border border-transparent hover:border-white/40 duration-200'>Shop Now <GoArrowRight className=" text-lg"/> </Button>
        </div>
        <Image
        className=" h-60 w-72 sm:h-80 sm:w-96"
        src={banner?.image}
        alt="bannerImage"
        priority
      />
      </Container>
      
    </div>
  );
};

export default Banner;
