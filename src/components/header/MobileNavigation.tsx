"use client";

import React, { useEffect, useRef, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Dialog, DialogPanel } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { navigation } from "@/constants";
import SocialLinks from "../SocialLinks";
import { HiX } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { ProductType } from "../../../typs";
import { getData } from "@/helpers";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const searchRef = useRef<HTMLDivElement>(null);

  // fetch products
  useEffect(() => {
    const getProducts = async () => {
      const endpoint = "https://dummyjson.com/products";
      try {
        const data = await getData(endpoint);
        setProducts(data?.products);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    getProducts();
  }, []);

  // filter products only when searchTerm is not empty
  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      const filtered = products?.filter((item: ProductType) =>
        item?.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
      setSelectedIndex(-1);
    } else {
      setFilteredProducts([]); 
    }
  }, [searchTerm, products]);

  // close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    }
    if (searchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchOpen]);

  const handleSearch = () => {
    if (!searchTerm) return;
    const filtered = products?.filter((item: ProductType) =>
      item?.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setSearchTerm(""); // clear after search
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (selectedIndex >= 0 && filteredProducts[selectedIndex]) {
        window.location.href = `/products/${filteredProducts[selectedIndex].id}`;
        setSearchOpen(false);
        setSearchTerm("");
      } else {
        handleSearch();
      }
    }
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) =>
        prev < filteredProducts.length - 1 ? prev + 1 : prev
      );
    }
    if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  return (
    <>
      <div>
        {/* Header row */}
        <div className="md:hidden flex items-center justify-between px-3 py-2 bg-white ">
          {/* Search icon */}
          {!searchOpen && (
            <button
              className="ml-3 flex justify-center items-center w-7 h-7 rounded-full bg-sky-600 text-white cursor-pointer"
              onClick={() => setSearchOpen(true)}
            >
              <IoSearch className="text-xl" />
            </button>
          )}

          {/* Right: Menu icon */}
          <div
            onClick={() => setIsOpen(true)}
            className="text-3xl text-gray-500 hover:text-sky-600 duration-200 cursor-pointer ml-auto"
          >
            <RiMenu3Fill />
          </div>
        </div>

        {/* Search bar below header */}
        {searchOpen && (
          <div
            ref={searchRef}
            className="absolute top-full left-5 right-5 bg-white rounded-md shadow-md transition-all duration-300 ease-in-out"
          >
            <div className="flex items-center p-2 border border-gray-200 rounded-md mt-0">
              <input
                type="text"
                placeholder="Search..."
                autoComplete="off"
                className="bg-transparent h-[4vh] p-2 focus:outline-none text-sm flex-1"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className="flex justify-center items-center w-6 h-6 rounded-full bg-gray-500 hover:bg-rose-700 text-white cursor-pointer ml-2"
                onClick={() => setSearchOpen(false)}
              >
                <HiX className="text-sm" />
              </button>
            </div>

            {/* Dropdown results */}
            {searchTerm.trim().length > 0 && filteredProducts.length > 0 && (
              <div className="mt-2 max-h-72 overflow-y-auto">
                {filteredProducts.map((item: ProductType, index: number) => {
                  const regularPrice = item?.price;
                  const discountedPrice =
                    item?.price - (item?.price * item?.discountPercentage) / 100;

                  return (
                    <Link
                      key={item?.id}
                      href={`/products/${item?.id}`}
                      onClick={() => setSearchOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2 hover:bg-gray-100 ${
                        index === selectedIndex ? "bg-sky-100 ring-1 ring-sky-200" : ""
                      }`}
                    >
                      <img
                        src={item?.thumbnail || item?.images?.[0]}
                        alt={item?.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{item?.title}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 line-through">
                            ${regularPrice.toFixed(2)}
                          </span>
                          <span className="text-xs font-semibold text-sky-600">
                            ${discountedPrice.toFixed(2)}
                          </span>
                          <span className="text-[10px] bg-rose-500 text-white px-1.5 py-0.5 rounded">
                            -{item?.discountPercentage}%
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Mobile Menu */}
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
              <div className="flex items-center justify-between gap-5">
                <h3 className="font-semibold text-xl">Navigation Menu</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/40 text-2xl hover:text-red-600 duration-300 border border-white/20 rounded-sm cursor-pointer hover:border-white/40"
                >
                  <MdClose />
                </button>
              </div>
              <div className="flex flex-col gap-5 pt-5">
                {navigation?.map((item) => (
                  <Link
                    onClick={() => setIsOpen(false)}
                    key={item?.title}
                    href={item?.href}
                    className="hover:text-sky-600 relative group flex items-center gap-2"
                  >
                    <span className="w-2.5 h-2.5 rounded-full border border-white/80 inline-flex group-hover:border-sky-600" />
                    {item?.title}
                    <span className="absolute w-full h-px bg-white/20 left-0 -bottom-1 group-hover:bg-sky-600 duration-200" />
                  </Link>
                ))}
              </div>
              <SocialLinks />
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default MobileNavigation;