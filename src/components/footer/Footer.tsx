import React from "react";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import { logoShoplix } from "@/assets";
import SocialLinks from "../SocialLinks";
import Title from "../Title";
import { navigation } from "@/constants";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { paymentCardLogo } from "@/constants";

const Footer = () => {
  return (
    <div className="bg-lightBG py-10 lg:py-20 ">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
        <div className="flex flex-col gap-y-5">
          <Link href={"/"}>
            <Image
              src={logoShoplix}
              alt="LogoShoplix"
              className="h-12 w-36 priority"
            />
          </Link>
          <p>
            I'm Rashed Jaman Raj. Full Stack JavaScript Developer. Developing
            web, web app & Superior Software for Leading Businesses.
          </p>
          <SocialLinks iconStyle="bg-white/80 border border-sky-600 shadow-md text-black p-3 text-lg hover:bg-sky-600 hover:text-white cursor-pointer duration-200 rounded-md" />
        </div>

        <div className="pl-3 md:pl-8 space-y-2">
          <Title>My Account</Title>
          <div className=" flex flex-col font-medium text-xs md:text-sm gap-1 md:gap-3 -space-y-1">
            {navigation?.map((raj, index) => (
              <Link
                key={index}
                href={raj?.href}
                className=" hover:text-sky-600 duration-200 cursor-pointer"
              >
                {raj?.title}
              </Link>
            ))}
            <Link
              href={"/signin"}
              className=" hover:text-sky-600 duration-200 cursor-pointer"
            >
              signin
            </Link>
          </div>
        </div>

        <div className=" space-y-1">
          <Title>Informatin</Title>
          <div className=" space-y-2">
            <p className="hover:text-sky-600 cursor-pointer">
              Our Awesome Proucts
            </p>
            <p className="hover:text-sky-600 cursor-pointer">
              Our Company Details{" "}
            </p>
            <p className="hover:text-sky-600 cursor-pointer">Privacy Policy</p>
            <p className="hover:text-sky-600 cursor-pointer">products About</p>
            <p className="hover:text-sky-600 cursor-pointer">Our Members</p>
            <p className="hover:text-sky-600 cursor-pointer">About Our Team </p>
            <p className="hover:text-sky-600 cursor-pointer">Others</p>
          </div>
        </div>

        <div className="left-0 text-left space-y-1 ">
          <Title>Talk To Us</Title>
          <p>Got Questions? Call Us</p>
          <p className="font-semibold hover:text-sky-600 cursor-pointer">
            +88 09111365247
          </p>

          <div className="flex gap-1 items-center justify-start hover:text-sky-600 cursor-pointer">
            <MdOutlineEmail />
            <span>cotact@shoplix.com</span>
          </div>

          <div className="flex gap-1 items-center justify-start hover:text-sky-600 cursor-pointer">
            <IoLocationOutline className=" text-lg" />
            <span>Dhaka, Bangladesh</span>
          </div>
        </div>
      </Container>
      <div className="mt-8 sm:mt-4 px-5 gap-2 md:gap-4 md:px-20 md:flex justify-between items-center  ">
        <p className="text-sm">
          {" "}
          Copyright &copy; {new Date().getFullYear()}{" "}
          <Link href="/" className=" text-blue-600 hover:text-red-400">
            Shoplix
          </Link>{" "}
          All rights reserved{" "}
        </p>

        <Image
          src={paymentCardLogo}
          alt="Payment Cart"
          className=" justify-center h-20 w-70 rounded-lg"
        />

        <div>
          <p>
            {" "}
            Developed By{" "}
            <span className=" font-semibold font-mono text-sky-600">
              Rashed Jaman Raj
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
