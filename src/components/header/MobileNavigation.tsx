"use client";

import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Dialog, DialogPanel } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { navigation } from "@/constants";
import SocialLinks from "../SocialLinks";
import { HiX } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="md:hidden flex justify-end flex-1">
        {!searchOpen ? (
          <button
            className="flex justify-center items-center w-7 h-7 rounded-full bg-sky-600 text-white cursor-pointer transition-transform duration-300 ease-in-out"
            onClick={() => setSearchOpen(true)}
          >
            <IoSearch className="text-xl" />
          </button>
        ) : (
          <div className="flex items-center p-1 rounded-full border relative border-sky-600 max-w-48 w-full transition-all duration-300 ease-in-out">
            <input
              type="text"
              placeholder="search..."
              autoComplete="off"
              className="bg-transparent h-[4vh] p-2 focus:outline-none rounded-full text-sm flex-1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* Close button fixed at right side */}
            <button
              className="absolute right-1 flex justify-center items-center w-5 h-5 rounded-full bg-gray-500 hover:bg-rose-700 text-white cursor-pointer transition-transform duration-300 ease-in-out"
              onClick={() => setSearchOpen(false)}
            >
              <HiX className="text-sm" />
            </button>
          </div>
        )}
      </div>

      <div
        onClick={() => setIsOpen(true)}
        className=" text-3xl text-gray-500 md:hidden hover:text-sky-600 duration-200 cursor-pointer"
      >
        <RiMenu3Fill />
      </div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 md:hidden text-white/80"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/90 ">
          <DialogPanel
            transition
            className="w-[94%] space-y-4 p-6 border border-gray-500 rounded-md absolute top-10 m-5 bg-black "
          >
            <div className=" flex items-center justify-between gap-5">
              <h3 className=" font-semibold text-xl">Navigation Menu</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 text-2xl hover:text-red-600 duration-300 border border-white/20 rounded-sm cursor-pointer hover:border-white/40"
              >
                <MdClose />
              </button>
            </div>
            <div className=" flex flex-col gap-5 pt-5  ">
              {navigation?.map((item) => (
                <Link
                  onClick={() => setIsOpen(false)}
                  key={item?.title}
                  href={item?.href}
                  className=" hover:text-sky-600 relative group flex items-center gap-2"
                >
                  <span className=" w-2.5 h-2.5  rounded-full border border-white/80 inline-flex  group-hover:border-sky-600" />
                  {item?.title}
                  <span className=" absolute w-full h-px bg-white/20 left-0 -bottom-1 group-hover:bg-sky-600 duration-200" />
                </Link>
              ))}
            </div>
            <SocialLinks />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileNavigation;
