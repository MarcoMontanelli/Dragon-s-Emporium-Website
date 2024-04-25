"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/LDE.png";

export function DragonLogo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src={logo}
        className="h-11"
        alt="Dragon's Emporium Logo"
        width="60"
        height="50"
      />
      <span className="text-white self-center text-2xl font-bold whitespace-nowrap ">
        Dragon's Emporium
      </span>
    </Link>
  );
}
function DropValue({ value, link }) {
  return (
    <li>
      <Link href={link} className="block px-4 py-2 hover:bg-white text-white">
        {value}
      </Link>
    </li>
  );
}
function Dropdown({ value, handle }) {
  return (
    <button type="button" className="hidden lg:flex" onClick={handle}>
      {value}
      <svg
        className="w-3 h-3 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 2 4 4 4-4"
        />
      </svg>
    </button>
  );
}
function SearchBar() {
  return (
    <>
      <div className="flex lg:order-2">
        <div class="relative hidden lg:block">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-blackk"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="search-navbar"
            class="block w-full p-2 ps-10 text-sm text-blackk border-white rounded-lg focus:ring-white focus:border-white "
            placeholder="Search..."
          />
        </div>
      </div>
    </>
  );
}
function MainMenu({ handle }) {
  return (
    <button
      data-collapse-toggle="navbar-search"
      type="button"
      className="lg:hidden"
      aria-controls="navbar-search"
      aria-expanded="false"
      onClick={handle}
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-8 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  );
}
export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [mIsOpen, setMOpen] = useState(Array(2).fill(false));
  //const [sameI, setSameI] = useState(null);
  function handleDropDown() {
    console.log("piero angela");
    setOpen(!isOpen);
  }
  function handleDropdownMobile(i) {
    const currentDropdown = mIsOpen.slice();
    if (i == 0) {
      currentDropdown[i] = !currentDropdown[i];
      currentDropdown[1] = false;
      setMOpen(currentDropdown);
      return;
    }
    currentDropdown[i] = !currentDropdown[i];
    setMOpen(currentDropdown);
  }
  function redirect(url) {
    window.location = url;
  }
  return (
    <>
      <nav className="bg-purple-950">
        <div className="flex flex-wrap lg:flex items-center justify-between mx-auto p-5 lg:p-4">
          <DragonLogo />
          {/*BLOG DESKTOP*/}
          <div className="flex flex-col relative z-10">
            <Dropdown value="BLOG" handle={handleDropDown} />
            <div
              id="blog"
              className={` ${
                isOpen ? "block" : "hidden"
              } bg-space-cadet absolute top-12 w-full divide-y rounded-lg`}
            >
              <ul className="py-2 text-sm">
                <DropValue value="news" link="#" />
                <DropValue value="posts" link="#" />
              </ul>
            </div>
          </div>
          {/*SHOP DESKTOP*/}
          <button
            className="hidden lg:flex"
            onClick={() => redirect("../../shop.html")}
          >
            SHOP
          </button>
          <button className="hidden lg:flex" onClick={() => redirect("#")}>
            ABOUT US
          </button>
          <button className="hidden lg:flex" onClick={() => redirect("#")}>
            PORTFOLIO
          </button>
          <button
            className="hidden lg:flex"
            onClick={() => redirect("../../blog.html")}
          >
            COMMISSIONS
          </button>
          <SearchBar />
          <MainMenu handle={() => handleDropdownMobile(0)} />
        </div>
      </nav>
      <div className={` ${mIsOpen[0] ? "block" : "hidden"} "lg:hidden`}>
        <div class="relative mt-3 lg:hidden">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="search-navbar"
            class="block w-full p-3 ps-10 text-sm text-blackk border rounded-lg"
            placeholder="Search..."
          />
        </div>
        {/*SEARCHBAR MOBILE*/}
        <ul class="flex flex-col p-4 mt-4 font-medium border rounded-lg">
          <li>
            <div className="flex flex-col relative z-50">
              <button
                class="flex object-fill py-2 px-3 rounded hover:bg-white text-white"
                type="button"
                onClick={() => handleDropdownMobile(1)}
              >
                Blog
                <svg
                  class="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="blog"
                className={` ${
                  mIsOpen[1] ? "block" : "hidden"
                } bg-space-cadet absolute top-12 w-full divide-y rounded-lg`}
              >
                <ul className="py-2 text-sm">
                  <DropValue value="news" link="#" />
                  <DropValue value="posts" link="#" />
                </ul>
              </div>
            </div>
          </li>
          {/*BLOG MOBILE*/}
          <li>
            <Link
              href="../../shop.html"
              class="block py-2 px-3 rounded hover:bg-white text-white"
            >
              Shop
            </Link>
          </li>
          {/*SHOP MOBILE*/}
          <li>
            <Link
              href="#"
              class="block py-2 px-3 rounded hover:bg-white text-white"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href="#"
              class="block py-2 px-3 rounded hover:bg-white text-white"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="#"
              class="block py-2 px-3 rounded hover:bg-white text-white"
            >
              Commissions
            </Link>
          </li>
        </ul>
      </div>
      {/*MOBILE MENU*/}
    </>
  );
}
