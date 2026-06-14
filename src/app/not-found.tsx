import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const NotFound = () => {
  return (
    <div className="max-w-7xl  mx-auto ">
      <Container className="flex flex-col items-center justify-center text-center mt-5 ">
        <Image
          src="/images/notFoundPage.png"
          width={400}
          height={400}
          alt="notFound"
        />
        <Link href="/" className=" items-center justify-center">
          <button className=" flex text-white text-lg items-center justify-center border border-cyan-600 bg-cyan-600 hover:bg-cyan-700 py-1 px-4 rounded-md cursor-pointer">
            <IoIosArrowRoundBack /> Back to Home
          </button>
        </Link>
      </Container>
    </div>
  );
};

export default NotFound;
