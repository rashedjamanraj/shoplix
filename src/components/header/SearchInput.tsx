"use client";

import { getData } from "@/helpers";
import React, { useEffect, useState, useRef } from "react";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";
import { ProductType } from "../../../typs";
import Link from "next/link";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [Products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const wrapperRef = useRef<HTMLDivElement>(null);

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

  // load saved search term (only text, not dropdown)
  useEffect(() => {
    const savedSearch = localStorage.getItem("searchTerm");
    if (savedSearch) {
      setSearch(savedSearch);
    }
  }, []);

  // filter products when typing
  useEffect(() => {
    if (search.trim().length > 0 && Products.length > 0) {
      const filtered = Products.filter((item: ProductType) =>
        item?.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);

      // save to localStorage
      localStorage.setItem("searchTerm", search);
    } else {
      setFilteredProducts([]);
    }
  }, [search, Products]);

  // handle search button click
  const handleSearch = () => {
    if (!search) return;
    const filtered = Products.filter((item: ProductType) =>
      item?.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
    setOpenDropdown(true);

    // save to localStorage
    localStorage.setItem("searchTerm", search);
  };

  // close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (selectedIndex >= 0 && filteredProducts[selectedIndex]) {
        window.location.href = `/products/${filteredProducts[selectedIndex].id}`;
        setOpenDropdown(false);
      } else {
        handleSearch();
      }
    }
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) =>
        prev < filteredProducts.length - 1 ? prev + 1 : prev
      );
      setOpenDropdown(true);
    }
    if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  return (
    <div ref={wrapperRef} className="hidden md:inline-flex flex-1 h-10 relative">
      <input
        type="text"
        placeholder="Search Product Here..."
        className="w-full h-full border border-sky-600 px-4 outline-none"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setOpenDropdown(true);
        }}
        onKeyDown={handleKeyDown}
        onFocus={() => {
          if (search.trim().length > 0 && filteredProducts.length > 0) {
            setOpenDropdown(true);
          }
        }}
      />
      {search && (
        <RiCloseLine
          onClick={() => {
            setSearch("");
            setOpenDropdown(false);
            setFilteredProducts([]);
            localStorage.removeItem("searchTerm");
          }}
          className="text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200"
        />
      )}
      <span
        onClick={handleSearch}
        className="w-10 h-10 bg-sky-500 inline-flex items-center justify-center text-white absolute top-0 right-0 border border-sky-600 hover:bg-sky-600 duration-200 cursor-pointer"
      >
        <RiSearchLine />
      </span>

      {openDropdown && (
        <div className="absolute left-0 top-12 w-full mx-auto h-auto max-h-96 bg-white rounded-md overflow-y-scroll cursor-pointer text-black shadow-md">
          {filteredProducts?.length > 0 ? (
            <div>
              {filteredProducts.map((item: ProductType, index: number) => {
                const regularPrice = item?.price;
                const discountedPrice =
                  item?.price - (item?.price * item?.discountPercentage) / 100;

                return (
                  <Link
                    key={item?.id}
                    href={`/products/${item?.id}`}
                    onClick={() => setOpenDropdown(false)}
                    className={`flex items-center gap-3 px-3 py-2 
                      ${index === selectedIndex ? "bg-sky-100 ring-1 ring-sky-200" : "hover:bg-gray-100"}`}
                  >
                    <img
                      src={item?.thumbnail || item?.images?.[0]}
                      alt={item?.title}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex flex-col">
                      <span className="font-medium">{item?.title}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 line-through">
                          ${regularPrice.toFixed(2)}
                        </span>
                        <span className="text-sm font-semibold text-sky-600">
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
          ) : (
            <div className="py-10 px-5">
              <p className="text-base">
                Nothing matched with{" "}
                <span className="font-semibold underline underline-offset-2 decoration-1">
                  {search}
                </span>{" "}
                please try again.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
