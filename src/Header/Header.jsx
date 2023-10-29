"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import "./NavbarStyle.css";
import logo from "@/public/logo/logo.png";

export default function Home() {
  const pathname = usePathname();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  // console.log(pathname);

  return (
    <>
      {/* <header className="fixed w-full z-20">
              <nav className="bg-black h-[100px] border-gray-200 px-4 md:px-6 py-2.5">
                  <div className="h-full text-2xl flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                      <a href="/" className={`flex items-center ${pathname === '/' ? 'text-white' : 'text-zinc-500'}`}>
                          <img src="./Logo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
                          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CodeRIT</span>
                      </a>
                      <div className=" justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                          <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                              <li >
                                  <a href="/" className={`${pathname === '/' ? 'text-white' : 'text-zinc-500'} block py-2 pr-4 pl-3 rounded bg-primary-700 `} aria-current="page">Home</a>
                              </li>
                              <li>
                                  <a href="/events" className={`${pathname === '/events' ? 'text-white' : 'text-zinc-500'} block py-2 pr-4 pl-3  `}>Events</a>
                              </li>
                              <li>
                                  <a href="team" className={`${pathname === '/team' ? 'text-white' : 'text-zinc-500'} block py-2 pr-4 pl-3  `}>Team</a>
                              </li>
                              <li>
                                  <a href="registration" className={`${pathname === '/registration' ? 'text-white' : 'text-zinc-500'} block py-2 pr-4 pl-3 `}>Register</a>
                              </li>
                          </ul>

                          <Image onClick={handleClick} src={clicked?"/hamburger.png":"/delete.png"} className='text-white border-2 border-white' width={20} height={20}></Image>
                      </div>
                  </div>
              </nav>
          </header> */}

      <nav className="fixed w-full z-10">
        <a href="/" className="text-white text-3xl">
          <Image src={logo} width={80} alt="CodeRIT logo" className="mx-auto" />
        </a>

        <div>
          <ul
            id="navbar"
            className={`${clicked ? "#navbar active" : "#navbar"} z-50`}
          >
            <li
              className={`${pathname === "/" ? "text-white" : "text-zinc-500"}`}
            >
              <a href="/">Home</a>
            </li>
            <li
              className={`${
                pathname === "/events" ? "text-white" : "text-zinc-500"
              }`}
            >
              <a href="/events">Events</a>
            </li>
            <li
              className={`${
                pathname === "/team" ? "text-white" : "text-zinc-500"
              }`}
            >
              <a href="/team">Team</a>
            </li>
            <li
              className={`${
                pathname === "/registration" ? "text-white" : "text-zinc-500"
              }`}
            >
              <a href="/registration">Ice-Breaker 2023</a>
            </li>
          </ul>
        </div>

        <div id="mobile">
          <Image
            id="bar"
            src={clicked ? "/delete.png" : "/hamburger.png"}
            onClick={handleClick}
            width={20}
            height={20}
          ></Image>
          {/* <Image src="/delete.png" width={20} height={20}></Image> */}
        </div>
      </nav>
    </>
  );
}
